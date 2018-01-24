import React, { Component } from 'react';
import ButtonDropdown from './ButtonDropdown';

export default class UncontrolledButtonDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}
