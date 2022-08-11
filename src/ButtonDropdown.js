import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node,
};

function ButtonDropdown(props) {
  return <Dropdown group {...props} />;
}

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
