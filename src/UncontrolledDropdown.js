import React, { Component } from 'react';
import Dropdown from './Dropdown';

export default class UncontrolledDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}
