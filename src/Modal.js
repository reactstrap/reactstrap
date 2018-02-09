import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
    }
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // handle portal events/dom updates
      this.togglePortal();
    } else if (this._element) {
      // rerender portal
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed(node) {
    // so all methods get called before it is unmounted
    setTimeout(() => this.destroy(), 0);
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);
  }

  handleEscape(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
    } else {
      this.hide();
    }
  }

  destroy() {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    if (this.bodyClassAdded) {
      const modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      this.bodyClassAdded = false;
    }
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    if (this._dialog) {
      if (this.props.toggle) {
        this.props.toggle(true);
      }
      return;
    }
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    if (!this.bodyClassAdded) {
      document.body.className = classNames(
        classes,
        mapToCssModules('modal-open', this.props.cssModule)
      );
      this.bodyClassAdded = true;
    }

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
        {...attributes}
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

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
      this._focus = false;
    }
  }

  renderChildren() {
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
      onClickCapture: this.handleBackdropClick,
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
    );
  }

  render() {
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
