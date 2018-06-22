import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

const propTypes = {
  fade: PropTypes.bool
};

const defaultProps = {
  fade: true
};

class UncontrolledAlert extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <Alert isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}

UncontrolledAlert.propTypes = propTypes;
UncontrolledAlert.defaultProps = defaultProps;

export default UncontrolledAlert;
