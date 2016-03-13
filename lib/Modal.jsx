import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Fade from './Fade';

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
    this.hide();
  }

  onEnter() {
    this._modal.fadeIn();
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
    this.removeEvents();

    if (this._modal) {
      this._modal.fadeOut();
    }
    if (this._backdrop) {
      this._backdrop.fadeOut(this.onExit, 250);
    }
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

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    this._element.focus();
    this._backdrop.fadeIn(this.onEnter, 100);
  }

  renderChildren() {
    return (
      <div>
        <Fade className="modal" style={{ display: 'block' }} tabIndex="-1" ref={(c) => this._modal = c }>
          <div className="modal-dialog" role="document" ref={(c) => this._dialog = c }>
            <div className="modal-content">
              { this.props.children }
            </div>
          </div>
        </Fade>
        <Fade className="modal-backdrop" ref={(c) => this._backdrop = c }/>
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
