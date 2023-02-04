import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node,
};

const ButtonDropdown = React.forwardRef((props, ref) => {
  return <Dropdown group {...props} ref={ref} />;
})

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
