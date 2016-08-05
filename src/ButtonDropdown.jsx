import React, { PropTypes } from 'react';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node
};

const ButtonDropdown = (props) => {
  return (
    <Dropdown {...props} group />
  );
};

ButtonDropdown.PropTypes = propTypes;

export default ButtonDropdown;
