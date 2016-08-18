import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TransitionGroup from 'react-addons-transition-group';
import Fade from './Fade';

const propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  children: PropTypes.node
};

const defaultProps = {
  isOpen: false
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.show();
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
    if (e.keyCode === 27) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
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
    this.removeEvents();

    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    document.body.className = classNames(classes).trim();
  }

  removeEvents() {
    document.removeEventListener('click', this.handleBackdropClick, false);
    document.removeEventListener('keyup', this.handleEscape, false);
  }

  hide() {
    this.renderIntoSubtree();
    this.removeEvents();
  }

  show() {
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');

    document.body.appendChild(this._element);
    document.addEventListener('click', this.handleBackdropClick, false);
    document.addEventListener('keyup', this.handleEscape, false);

    document.body.className = classNames(
      classes,
      'modal-open'
    );

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
      this._element.focus();
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
            className="modal"
            style={{ display: 'block' }}
            tabIndex="-1"
          >
            <div
              className={this.props.size ? `modal-dialog modal-${this.props.size}` : 'modal-dialog'}
              role="document"
              ref={(c) => (this._dialog = c)}
            >
              <div className="modal-content">
                {this.props.children}
              </div>
            </div>
          </Fade>
        )}
        {this.props.isOpen && (
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
