import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Fade from './Fade';
import TransitionGroup from 'react-addons-transition-group';

const propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
  onExit: PropTypes.func
};

const defaultProps = {
  isOpen: false
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleProps = this.handleProps.bind(this);
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
      this.handleProps();
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
    const container = ReactDOM.findDOMNode(this._dialog);

    if (e.target && !container.contains(e.target)) {
      this.props.toggle();
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  destroy() {
    let classes = document.body.className.replace('modal-open', '');
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
    this._element.focus();
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );
  }

  renderChildren() {
    return (
      <TransitionGroup component="div">
        { this.props.isOpen && (
          <Fade
            key={Math.random()}
            onEnter={this.onEnter}
            onLeave={this.onExit}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            className="modal"
            style={{ display: 'block' }}
            tabIndex="-1">
            <div className="modal-dialog" role="document" ref={(c) => this._dialog = c }>
              <div className="modal-content">
                { this.props.children }
              </div>
            </div>
          </Fade>
        )}
        { this.props.isOpen && (
          <Fade
            key={Math.random()}
            transitionAppearTimeout={150}
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
            className="modal-backdrop"/>
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
