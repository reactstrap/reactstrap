import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import isFunction from 'lodash.isfunction';
import Tether from 'reactstrap-tether';

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
    this.checkTogglerTarget = this.checkTogglerTarget.bind(this);
    this.toggle = this.toggle.bind(this);

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

  checkTogglerTarget(togglerID, clickTarget) {
    if (clickTarget && clickTarget.id) return clickTarget.id === togglerID.slice(1);
    return null;
  }

  handleDocumentClick(e) {
    const container = this._element;
    const togglerIsTarget = this.checkTogglerTarget(this.getTarget(), e.target);

    if (e.target === container || !container.contains(e.target)) {
      if (this.props.closeOnClick) {
        // toggle only if we click elsewhere, or if the toggler hasn't been clicked already
        if (!togglerIsTarget || !this.state.togglerClicked) {
          this.toggle();
        }
      } else {
        this.toggle();
      }
    }

    if (this.props.closeOnClick) {
      this.state.togglerClicked = false;
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.state.togglerClicked = true;
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
