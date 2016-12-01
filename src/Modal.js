import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TransitionGroup from 'react-addons-transition-group';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
} from './utils';

const propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
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
  zIndex: 1000,
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
    if (this.props.keyboard && e.keyCode === 27) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target)) {
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
    const classes = document.body.className.replace('modal-open', '');

    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

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
    return (
      <TransitionGroup component="div">
        {this.props.isOpen && (
          <Fade
            key="modal-dialog"
            onEnter={this.onEnter}
            onLeave={this.onExit}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            onClickCapture={this.handleBackdropClick}
            onKeyUp={this.handleEscape}
            className="modal"
            style={{ display: 'block' }}
            tabIndex="-1"
          >
            <div
              className={mapToCssModules(classNames('modal-dialog', this.props.className, {
                [`modal-${this.props.size}`]: this.props.size
              }), this.props.cssModule)}
              role="document"
              ref={(c) => (this._dialog = c)}
            >
              <div className="modal-content">
                {this.props.children}
              </div>
            </div>
          </Fade>
        )}
        {this.props.isOpen && this.props.backdrop && (
          <Fade
            key="modal-backdrop"
            transitionAppearTimeout={150}
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
            className="modal-backdrop"
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
