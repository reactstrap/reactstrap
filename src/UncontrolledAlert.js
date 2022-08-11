import React, { Component } from 'react';
import Alert from './Alert';

class UncontrolledAlert extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Alert isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />
    );
  }
}

export default UncontrolledAlert;
