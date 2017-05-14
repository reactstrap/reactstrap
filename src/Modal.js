import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
} from './utils';

const propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
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
  backdropTransitionTimeout: PropTypes.number,
  backdropTransitionAppearTimeout: PropTypes.number,
  backdropTransitionEnterTimeout: PropTypes.number,
  backdropTransitionLeaveTimeout: PropTypes.number,
  modalTransitionTimeout: PropTypes.number,
  modalTransitionAppearTimeout: PropTypes.number,
  modalTransitionEnterTimeout: PropTypes.number,
  modalTransitionLeaveTimeout: PropTypes.number,
};

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
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
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
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
    this.onExit();
  }

  onEnter() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  onExit() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
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

  hasTransition() {
    if (this.props.fade === false) {
      return false;
    }

    return this.props.modalTransitionTimeout > 0;
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
      if (!this.hasTransition()) {
        this.onEnter();
      }
    } else {
      this.hide();
      if (!this.hasTransition()) {
        this.onExit();
      }
    }
  }

  destroy() {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    const classes = document.body.className.replace('modal-open', '');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => (this._dialog = c)}
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
      this._dialog.parentNode.focus();
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
      modalTransitionTimeout,
      backdropTransitionTimeout
    } = this.props;

    const modalAttributes = {
      onClickCapture: this.handleBackdropClick,
      onKeyUp: this.handleEscape,
      style: { display: 'block' },
      tabIndex: '-1'
    };

    if (this.hasTransition()) {
      return (
        <TransitionGroup component="div" className={mapToCssModules(wrapClassName)}>
          {isOpen && (
            <Fade
              key="modal-dialog"
              onEnter={this.onEnter}
              onLeave={this.onExit}
              transitionAppearTimeout={
                typeof this.props.modalTransitionAppearTimeout === 'number'
                  ? this.props.modalTransitionAppearTimeout
                  : modalTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.modalTransitionEnterTimeout === 'number'
                  ? this.props.modalTransitionEnterTimeout
                  : modalTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.modalTransitionLeaveTimeout === 'number'
                  ? this.props.modalTransitionLeaveTimeout
                  : modalTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
              {...modalAttributes}
            >
              {this.renderModalDialog()}
            </Fade>
          )}
          {isOpen && backdrop && (
            <Fade
              key="modal-backdrop"
              transitionAppearTimeout={
                typeof this.props.backdropTransitionAppearTimeout === 'number'
                  ? this.props.backdropTransitionAppearTimeout
                  : backdropTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.backdropTransitionEnterTimeout === 'number'
                  ? this.props.backdropTransitionEnterTimeout
                  : backdropTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.backdropTransitionLeaveTimeout === 'number'
                  ? this.props.backdropTransitionLeaveTimeout
                  : backdropTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
            />
          )}
        </TransitionGroup>
      );
    }

    return (
      <div className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <div
            className={mapToCssModules(classNames('modal', 'show', modalClassName), cssModule)}
            {...modalAttributes}
          >
            {this.renderModalDialog()}
          </div>
        )}
        {isOpen && backdrop && (
          <div
            className={mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)}
          />
        )}
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
