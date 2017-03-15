import React from 'react';
import Dropdown from './Dropdown';

const { PropTypes } = React;
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
