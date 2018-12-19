import React, { Component } from 'react';


export default class UncontrolledNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <Navigation open={this.state.isOpen} onOpen={this.toggle} {...this.props} />;
  }
}
