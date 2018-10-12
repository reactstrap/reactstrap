import React, { Component } from 'react';
import Tooltip from './Tooltip';

export default class UncontrolledTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle() {
    if (this._isMounted) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    return <Tooltip isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}
