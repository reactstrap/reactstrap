import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import omit from 'lodash.omit';
import TransitionGroup from 'react-addons-transition-group';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
} from './utils';

const { PropTypes } = React;
const propTypes = {
  isOpen: PropTypes.bool,
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
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

const defaultProps = {
  isOpen: false,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
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

  togglePortal() {
    if (this.props.isOpen) {
      this._focus = true;
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
      className,
      wrapClassName,
      modalClassName,
      backdropClassName,
      contentClassName,
      cssModule,
      isOpen,
      size,
      backdrop,
      children,
      ...attributes
    } = omit(this.props, ['toggle', 'keyboard', 'onEnter', 'onExit', 'zIndex']);

    return (
      <TransitionGroup component="div" className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <Fade
            key="modal-dialog"
            onEnter={this.onEnter}
            onLeave={this.onExit}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            onClickCapture={this.handleBackdropClick}
            onKeyUp={this.handleEscape}
            cssModule={cssModule}
            className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
            style={{ display: 'block' }}
            tabIndex="-1"
          >
            <div
              className={mapToCssModules(classNames('modal-dialog', className, {
                [`modal-${size}`]: size
              }), cssModule)}
              role="document"
              ref={(c) => (this._dialog = c)}
              {...attributes}
            >
              <div className={mapToCssModules(classNames('modal-content', contentClassName), cssModule)}>
                {children}
              </div>
            </div>
          </Fade>
        )}
        {isOpen && backdrop && (
          <Fade
            key="modal-backdrop"
            transitionAppearTimeout={150}
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
            cssModule={cssModule}
            className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
          />
        )}
      </TransitionGroup>
    );
  }

  render() {
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
