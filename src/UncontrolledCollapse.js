import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';
import { findDOMElements, defaultToggleEvents, addMultipleEventListeners } from './utils';

const propTypes = {
  toggler: PropTypes.string.isRequired,
  toggleEvents: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  toggleEvents: defaultToggleEvents
};

class UncontrolledCollapse extends Component {
  constructor(props) {
    super(props);

    this.togglers = null;
    this.removeEventListeners = null;
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
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

  toggle() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const { toggleEvents, ...rest } = this.props;
    return <Collapse isOpen={this.state.isOpen} {...rest} />;
  }
}

UncontrolledCollapse.propTypes = propTypes;
UncontrolledCollapse.defaultProps = defaultProps;

export default UncontrolledCollapse;
