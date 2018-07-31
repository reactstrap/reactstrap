import React, { Component } from 'react';
import Tooltip from './Tooltip';
import PropTypes from 'prop-types';

const propTypes = {
  boundariesElement: PropTypes.string
};

class UncontrolledTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <Tooltip isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}

UncontrolledTooltip.propTypes = propTypes;

export default UncontrolledTooltip;