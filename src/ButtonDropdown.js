import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node,
};

const ButtonDropdown = (props) => {
  return (
    <Dropdown {...props} group />
  );
};

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
