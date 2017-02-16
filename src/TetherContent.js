import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import isFunction from 'lodash.isfunction';
import Tether from 'tether';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  arrow: PropTypes.string,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  closeOnClick: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  tether: PropTypes.object.isRequired,
  tetherRef: PropTypes.func,
  style: PropTypes.node,
  cssModule: PropTypes.object,
};

const defaultProps = {
  isOpen: false,
  closeOnClick: false,
  tetherRef: function () {}
};

class TetherContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.checkTogglerTarget = this.checkTogglerTarget.bind(this);
    this.shouldToggle = this.shouldToggle.bind(this);

    this.state = { togglerClicked: false };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    } else if (this._element) {
      // rerender
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  getTarget() {
    const target = this.props.tether.target;

    if (isFunction(target)) {
      return target();
    }

    return target;
  }

  getTetherConfig() {
    const config = {
      ...this.props.tether
    };

    config.element = this._element;
    config.target = this.getTarget();
    return config;
  }

  checkTogglerTarget(clickTarget) {
    const togglerID = this.getTarget();
    if (clickTarget && clickTarget.id) return clickTarget.id === togglerID.substr(1);
    return null;
  }

  // determines whether the toggle method should be called
  shouldToggle(event, container, closeOnClick) {
    const togglerIsTarget = this.checkTogglerTarget(event.target);

    return (
      event.target === container || (!container.contains(event.target) &&
      (!closeOnClick || (closeOnClick && !togglerIsTarget)))
    );
  }

  handleDocumentClick(e) {
    const { closeOnClick } = this.props;
    if (this.shouldToggle(e, this._element, closeOnClick)) this.toggle();
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide() {
    document.removeEventListener('click', this.handleDocumentClick, true);

    if (this._element) {
      document.body.removeChild(this._element);
      ReactDOM.unmountComponentAtNode(this._element);
      this._element = null;
    }

    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
      this.props.tetherRef(this._tether);
    }
  }

  show() {
    document.addEventListener('click', this.handleDocumentClick, true);

    this._element = document.createElement('div');
    this._element.className = this.props.className;
    document.body.appendChild(this._element);
    this.renderIntoSubtree();
    this._tether = new Tether(this.getTetherConfig());
    this.props.tetherRef(this._tether);
    this._tether.position();
    this._element.childNodes[0].focus();
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );
  }

  renderChildren() {
    const { children, style } = this.props;
    return React.cloneElement(
      children,
      { style }
    );
  }

  render() {
    return null;
  }
}

TetherContent.propTypes = propTypes;
TetherContent.defaultProps = defaultProps;

export default TetherContent;
