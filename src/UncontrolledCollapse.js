import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';
import { findDOMElements, defaultToggleEvents, addMultipleEventListeners } from './utils';

const propTypes = {
  toggler: PropTypes.string.isRequired,
  toggleEvents: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool
};

const defaultProps = {
  toggleEvents: defaultToggleEvents,
  open: false
};

class UncontrolledCollapse extends Component {
  constructor(props) {
    super(props);

    this.togglers = null;
    this.removeEventListeners = null;
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: this.props.open
    };
  }

  componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);
    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(
        this.togglers,
        this.toggle,
        this.props.toggleEvents
      );
    }
  }

  componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  }

  toggle(e) {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    e.preventDefault();
  }

  render() {
    const { toggleEvents, open, ...rest } = this.props;
    return <Collapse isOpen={this.state.isOpen} {...rest} />;
  }
}

UncontrolledCollapse.propTypes = propTypes;
UncontrolledCollapse.defaultProps = defaultProps;

export default UncontrolledCollapse;
