import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from './Popover';
import { omit } from './utils';

const omitKeys = ['defaultOpen'];

export default class UncontrolledPopover extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: props.defaultOpen || false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Popover
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...omit(this.props, omitKeys)}
      />
    );
  }
}

UncontrolledPopover.propTypes = {
  defaultOpen: PropTypes.bool,
  ...Popover.propTypes,
};
