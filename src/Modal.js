import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import classNames from 'classnames';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit,
  TransitionTimeouts
} from './utils';

function noop() { }

const FadePropTypes = PropTypes.shape(Fade.propTypes);

const propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
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
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this._element = null;
    this._originalBodyPadding = null;
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);

    this.state = {
      isOpen: props.isOpen,
    };

    if (props.isOpen) {
      this.init();
    }
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }

    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen && !this.state.isOpen) {
      this.init();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this.state.isOpen) {
      this.destroy();
    }

    this._isMounted = false;
  }

  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed(node) {
    // so all methods get called before it is unmounted
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);
    this.destroy();

    if (this._isMounted) {
      this.setState({ isOpen: false });
    }
  }

  setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  }

  handleBackdropClick(e) {
    e.stopPropagation();
    if (!this.props.isOpen || this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleEscape(e) {
    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  init() {
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this._originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = classNames(
      document.body.className,
      mapToCssModules('modal-open', this.props.cssModule)
    );
  }

  destroy() {
    document.body.removeChild(this._element);
    this._element = null;

    const modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
    document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();

    setScrollbarWidth(this._originalBodyPadding);
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        {...attributes}
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', this.props.contentClassName),
            this.props.cssModule
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isOpen) {
      const {
        wrapClassName,
        modalClassName,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy
      } = this.props;

      const modalAttributes = {
        onClick: this.handleBackdropClick,
        onKeyUp: this.handleEscape,
        style: { display: 'block' },
        'aria-labelledby': labelledBy,
        role,
        tabIndex: '-1'
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
              className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
            >
              {this.renderModalDialog()}
            </Fade>
            <Fade
              {...backdropTransition}
              in={isOpen && !!backdrop}
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
            />
          </div>
        </Portal>
      );
    }

    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
