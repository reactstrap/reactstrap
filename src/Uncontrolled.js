import React from 'react';
import Alert from './Alert';
import ButtonDropdown from './ButtonDropdown';
import Dropdown from './Dropdown';
import Tooltip from './Tooltip';

const { Component } = React;
const components = {
  UncontrolledAlert: Alert,
  UncontrolledButtonDropdown: ButtonDropdown,
  UncontrolledDropdown: Dropdown,
  UncontrolledTooltip: Tooltip,
};

Object.keys(components).forEach((key) => {
  const Tag = components[key];
  const defaultValue = Tag === Alert;

  class Uncontrolled extends Component {
    constructor(props) {
      super(props);

      this.state = { isOpen: defaultValue };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return <Tag isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
    }
  }

  Uncontrolled.displayName = key;

  components[key] = Uncontrolled;
});

const UncontrolledAlert = components.UncontrolledAlert;
const UncontrolledButtonDropdown = components.UncontrolledButtonDropdown;
const UncontrolledDropdown = components.UncontrolledDropdown;
const UncontrolledTooltip = components.UncontrolledTooltip;

export {
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
};
