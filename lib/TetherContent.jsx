import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import omit from 'lodash.omit';
import isFunction from 'lodash.isfunction';
import Tether from 'tether';

const propTypes = {
  arrow: PropTypes.string,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  tether: PropTypes.object.isRequired
};

const defaultProps = {
  isOpen: false
};

class TetherContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  getTarget() {
    const target = this.props.tether.target;

    if (isFunction(target)) {
      return ReactDOM.findDOMNode(target());
    }

    return target;
  }

  getTetherConfig() {
    let config = {
      ...this.props.tether
    };

    config.element = ReactDOM.findDOMNode(this._element);
    config.target = this.getTarget();
    return config;
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this._element);
    if (e.target === container || !container.contains(e.target)) {
      this.toggle();
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide() {
    document.removeEventListener('click', this.handleDocumentClick);

    if (this._element) {
      document.body.removeChild(this._element);
      ReactDOM.unmountComponentAtNode(this._element);
      this._element = null;
    }

    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
    }
  }

  show() {
    document.addEventListener('click', this.handleDocumentClick);

    this._element = document.createElement('div');
    document.body.appendChild(this._element);
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    if (this.props.arrow) {
      let arrow = document.createElement('div');
      arrow.className = this.props.arrow + '-arrow';
      this._element.appendChild(arrow);
    }

    this._tether = new Tether(this.getTetherConfig());
    this._tether.position();
    this._element.childNodes[0].focus();
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    this.props.toggle();
  }

  renderChildren() {
    const props = omit(this.props, 'children');
    return React.cloneElement(
      this.props.children,
      {
        ...props,
        handleDocumentClick: this.handleDocumentClick,
        isOpen: this.props.isOpen,
        toggle: this.toggle,
        style: { position: 'relative', ...this.props.style }
      }
    );
  }

  render() {
    return null;
  }
}

TetherContent.propTypes = propTypes;
TetherContent.defaultProps = defaultProps;

export default TetherContent;
