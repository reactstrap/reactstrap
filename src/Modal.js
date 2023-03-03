import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from './Portal';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit,
  focusableElements,
  TransitionTimeouts,
  keyCodes,
  targetPropType,
  getTarget,
} from './utils';

function noop() {}

const FadePropTypes = PropTypes.shape(Fade.propTypes);

const propTypes = {
  /** */
  autoFocus: PropTypes.bool,
  /** Add backdrop to modal */
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  /** add custom classname to backdrop */
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes,
  /** Vertically center the modal */
  centered: PropTypes.bool,
  /** Add children for the modal to wrap */
  children: PropTypes.node,
  /** Add custom className for modal content */
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  external: PropTypes.node,
  /** Enable/Disable animation */
  fade: PropTypes.bool,
  /** Make the modal fullscreen */
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  ]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** The status of the modal, either open or close */
  isOpen: PropTypes.bool,
  /** Allow modal to be closed with escape key. */
  keyboard: PropTypes.bool,
  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: PropTypes.string,
  modalClassName: PropTypes.string,
  modalTransition: FadePropTypes,
  /** Function to be triggered on close */
  onClosed: PropTypes.func,
  /** Function to be triggered on enter */
  onEnter: PropTypes.func,
  /** Function to be triggered on exit */
  onExit: PropTypes.func,
  /** Function to be triggered on open */
  onOpened: PropTypes.func,
  /** Returns focus to the element that triggered opening of the modal */
  returnFocusAfterClose: PropTypes.bool,
  /** Accessibility role */
  role: PropTypes.string,
  /** Make the modal scrollable */
  scrollable: PropTypes.bool,
  /** Two optional sizes `lg` and `sm` */
  size: PropTypes.string,
  /** Function to toggle modal visibility */
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  /** Unmounts the modal when modal is closed */
  unmountOnClose: PropTypes.bool,
  wrapClassName: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal,
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade, // uses standard fade transition
  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this._element = null;
    this._originalBodyPadding = null;
    this.getFocusableChildren = this.getFocusableChildren.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleStaticBackdropAnimation =
      this.handleStaticBackdropAnimation.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
    this.clearBackdropAnimationTimeout =
      this.clearBackdropAnimationTimeout.bind(this);
    this.trapFocus = this.trapFocus.bind(this);

    this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false,
    };
  }

  componentDidMount() {
    const { isOpen, autoFocus, onEnter } = this.props;

    if (isOpen) {
      this.init();
      this.setState({ isOpen: true });
      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    }

    // traps focus inside the Modal, even if the browser address bar is focused
    document.addEventListener('focus', this.trapFocus, true);

    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({ isOpen: true });
      // let render() renders Modal Dialog first
      return;
    }

    // now Modal Dialog is rendered and we can refer this._element and this._dialog
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  }

  componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();
      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  }

  // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();

      const backdrop = this._dialog ? this._dialog.parentNode : null;

      if (
        backdrop &&
        e.target === backdrop &&
        this.props.backdrop === 'static'
      ) {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }

  handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    const focusableChildren = this.getFocusableChildren();
    const totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    const currentFocus = this.getFocusedChild();

    let focusedIndex = 0;

    for (let i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  }

  handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  }

  handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();

        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();

        this.handleStaticBackdropAnimation();
      }
    }
  }

  handleStaticBackdropAnimation() {
    this.clearBackdropAnimationTimeout();
    this.setState({ showStaticBackdropAnimation: true });
    this._backdropAnimationTimeout = setTimeout(() => {
      this.setState({ showStaticBackdropAnimation: false });
    }, 100);
  }

  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed(node) {
    const { unmountOnClose } = this.props;
    // so all methods get called before it is unmounted
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }
    this.close();

    if (this._isMounted) {
      this.setState({ isOpen: false });
    }
  }

  setFocus() {
    if (
      this._dialog &&
      this._dialog.parentNode &&
      typeof this._dialog.parentNode.focus === 'function'
    ) {
      this._dialog.parentNode.focus();
    }
  }

  getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  }

  getFocusedChild() {
    let currentFocus;
    const focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }
    return currentFocus;
  }

  trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) {
      // element is not attached
      return;
    }

    if (this._dialog && this._dialog.parentNode === ev.target) {
      // initial focus when the Modal is opened
      return;
    }

    if (this.modalIndex < Modal.openCount - 1) {
      // last opened modal
      return;
    }

    const children = this.getFocusableChildren();

    for (let i = 0; i < children.length; i += 1) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  }

  init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);
      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    if (Modal.openCount < 1) {
      Modal.originalBodyOverflow = window.getComputedStyle(
        document.body,
      ).overflow;
    }
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classNames(
        document.body.className,
        mapToCssModules('modal-open', this.props.cssModule),
      );
      document.body.style.overflow = 'hidden';
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  }

  destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);
      this._element = null;
    }

    this.manageFocusAfterClose();
  }

  manageFocusAfterClose() {
    if (this._triggeringElement) {
      const { returnFocusAfterClose } = this.props;
      if (this._triggeringElement.focus && returnFocusAfterClose)
        this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  }

  close() {
    if (Modal.openCount <= 1) {
      const modalOpenClassName = mapToCssModules(
        'modal-open',
        this.props.cssModule,
      );
      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      const modalOpenClassNameRegex = new RegExp(
        `(^| )${modalOpenClassName}( |$)`,
      );
      document.body.className = document.body.className
        .replace(modalOpenClassNameRegex, ' ')
        .trim();
      document.body.style.overflow = Modal.originalBodyOverflow;
    }
    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);

    setScrollbarWidth(this._originalBodyPadding);
  }

  clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);
    const dialogBaseClass = 'modal-dialog';

    return (
      <div
        {...attributes}
        className={mapToCssModules(
          classNames(dialogBaseClass, this.props.className, {
            [`modal-${this.props.size}`]: this.props.size,
            [`${dialogBaseClass}-centered`]: this.props.centered,
            [`${dialogBaseClass}-scrollable`]: this.props.scrollable,
            'modal-fullscreen': this.props.fullscreen === true,
            [`modal-fullscreen-${this.props.fullscreen}-down`]:
              typeof this.props.fullscreen === 'string',
          }),
          this.props.cssModule,
        )}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', this.props.contentClassName),
            this.props.cssModule,
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    const { unmountOnClose } = this.props;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      const isModalHidden =
        !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';

      const {
        wrapClassName,
        modalClassName,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy,
        external,
        innerRef,
      } = this.props;

      const modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: { display: 'block' },
        'aria-labelledby': labelledBy,
        role,
        tabIndex: '-1',
      };

      const hasTransition = this.props.fade;
      const modalTransition = {
        ...Fade.defaultProps,
        ...this.props.modalTransition,
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0,
      };
      const backdropTransition = {
        ...Fade.defaultProps,
        ...this.props.backdropTransition,
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0,
      };

      const Backdrop =
        backdrop &&
        (hasTransition ? (
          <Fade
            {...backdropTransition}
            in={isOpen && !!backdrop}
            cssModule={cssModule}
            className={mapToCssModules(
              classNames('modal-backdrop', backdropClassName),
              cssModule,
            )}
          />
        ) : (
          <div
            className={mapToCssModules(
              classNames('modal-backdrop', 'show', backdropClassName),
              cssModule,
            )}
          />
        ));

      return (
        <Portal node={this._element}>
          <div className={mapToCssModules(wrapClassName)}>
            <Fade
              {...modalAttributes}
              {...modalTransition}
              in={isOpen}
              onEntered={this.onOpened}
              onExited={this.onClosed}
              cssModule={cssModule}
              className={mapToCssModules(
                classNames(
                  'modal',
                  modalClassName,
                  this.state.showStaticBackdropAnimation && 'modal-static',
                ),
                cssModule,
              )}
              innerRef={innerRef}
            >
              {external}
              {this.renderModalDialog()}
            </Fade>
            {Backdrop}
          </div>
        </Portal>
      );
    }
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.openCount = 0;
Modal.originalBodyOverflow = null;

export default Modal;
