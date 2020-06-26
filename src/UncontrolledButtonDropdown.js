import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonDropdown from './ButtonDropdown';
import { omit } from './utils';

const omitKeys = ['defaultOpen'];

export default class UncontrolledButtonDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: props.defaultOpen || false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} {...omit(this.props, omitKeys)} />;
  }
}

UncontrolledButtonDropdown.propTypes = {
  defaultOpen: PropTypes.bool,
  ...ButtonDropdown.propTypes
};
