import React, { Component } from 'react';
import { warnOnce } from './utils';
import NavDropdown from './NavDropdown';

export default class UncontrolledNavDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

    return <NavDropdown isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}
