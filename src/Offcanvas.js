import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from './Portal';
import Fade from './Fade';
import {
  TransitionTimeouts,
  conditionallyUpdateScrollbar,
  focusableElements,
  getOriginalBodyPadding,
  getTarget,
  keyCodes,
  mapToCssModules,
  omit,
  setScrollbarWidth,
  targetPropType,
} from './utils';

function noop() {}

const FadePropTypes = PropTypes.shape(Fade.propTypes);

const propTypes = {
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  direction: PropTypes.oneOf(['start', 'end', 'bottom', 'top']),
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  labelledBy: PropTypes.string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.object,
  onOpened: PropTypes.func,
  returnFocusAfterClose: PropTypes.bool,
  role: PropTypes.string,
  scrollable: PropTypes.bool,
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  unmountOnClose: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  direction: 'start',
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas,
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

class Offcanvas extends React.Component {
  constructor(props) {
    super(props);

    this._element = null;
    this._originalBodyPadding = null;
    this.getFocusableChildren = this.getFocusableChildren.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
    this.clearBackdropAnimationTimeout =
      this.clearBackdropAnimationTimeout.bind(this);
    this.trapFocus = this.trapFocus.bind(this);

    this.state = {
      isOpen: false,
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

    // traps focus inside the Offcanvas, even if the browser address bar is focused
    document.addEventListener('focus', this.trapFocus, true);

    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({ isOpen: true });

      return;
    }

    // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog
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
      const backdrop = this._backdrop;

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }

  handleTab(e) {
    if (e.which !== 9) return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

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
      }
    }
  }

  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed(node) {
    const { unmountOnClose } = this.props;
    // so all methods get called before it is unmounted
    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }
    this.close();

    if (this._isMounted) {
      this.setState({ isOpen: false });
    }
  }

  setFocus() {
    if (this._dialog && typeof this._dialog.focus === 'function') {
      this._dialog.focus();
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

    if (this._dialog === ev.target) {
      // initial focus when the Offcanvas is opened
      return;
    }

    if (this.offcanvasIndex < Offcanvas.openCount - 1) {
      // last opened offcanvas
      return;
    }

    const children = this.getFocusableChildren();

    for (let i = 0; i < children.length; i += 1) {
      // focus is already inside the Offcanvas
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Offcanvas
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
    conditionallyUpdateScrollbar();

    if (
      Offcanvas.openCount === 0 &&
      this.props.backdrop &&
      !this.props.scrollable
    ) {
      document.body.style.overflow = 'hidden';
    }

    this.offcanvasIndex = Offcanvas.openCount;
    Offcanvas.openCount += 1;
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
    this.manageFocusAfterClose();
    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);

    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  }

  clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  }

  render() {
    const { direction, unmountOnClose } = this.props;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      const isOffcanvasHidden =
        !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';

      const {
        className,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy,
        style,
      } = this.props;

      const offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        'aria-labelledby': labelledBy,
        role,
        tabIndex: '-1',
      };

      const hasTransition = this.props.fade;
      const offcanvasTransition = {
        ...Fade.defaultProps,
        ...this.props.offcanvasTransition,
        baseClass: hasTransition
          ? this.props.offcanvasTransition.baseClass
          : '',
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0,
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
            innerRef={(c) => {
              this._backdrop = c;
            }}
            cssModule={cssModule}
            className={mapToCssModules(
              classNames('offcanvas-backdrop', backdropClassName),
              cssModule,
            )}
            onClick={this.handleBackdropClick}
            onMouseDown={this.handleBackdropMouseDown}
          />
        ) : (
          <div
            className={mapToCssModules(
              classNames('offcanvas-backdrop', 'show', backdropClassName),
              cssModule,
            )}
            onClick={this.handleBackdropClick}
            onMouseDown={this.handleBackdropMouseDown}
          />
        ));

      const attributes = omit(this.props, propsToOmit);

      return (
        <Portal node={this._element}>
          <Fade
            {...attributes}
            {...offcanvasAttributes}
            {...offcanvasTransition}
            in={isOpen}
            onEntered={this.onOpened}
            onExited={this.onClosed}
            cssModule={cssModule}
            className={mapToCssModules(
              classNames('offcanvas', className, `offcanvas-${direction}`),
              cssModule,
            )}
            innerRef={(c) => {
              this._dialog = c;
            }}
            style={{
              ...style,
              visibility: isOpen ? 'visible' : 'hidden',
            }}
          >
            {this.props.children}
          </Fade>
          {Backdrop}
        </Portal>
      );
    }
    return null;
  }
}

Offcanvas.propTypes = propTypes;
Offcanvas.defaultProps = defaultProps;
Offcanvas.openCount = 0;

export default React.forwardRef((props, ref) => <Offcanvas innerRef={ref} {...props} />);
