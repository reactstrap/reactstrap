import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const propTypes = {
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
};

const InputGroupButtonDropdown = React.forwardRef((props, ref) => {
  return (
    <Dropdown {...props} ref={ref} />
  );
});

InputGroupButtonDropdown.propTypes = propTypes;

export default InputGroupButtonDropdown;
