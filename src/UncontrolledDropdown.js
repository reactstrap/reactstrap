import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { omit } from './utils';

const omitKeys = ['defaultOpen'];

export default class UncontrolledDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: props.defaultOpen || false };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }), () => {
      if (this.props.onToggle) {
        this.props.onToggle(e, this.state.isOpen);
      }
    });
  }

  render() {
    return <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} {...omit(this.props, omitKeys)} />;
  }
}

UncontrolledDropdown.propTypes = {
  defaultOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  ...Dropdown.propTypes
};
