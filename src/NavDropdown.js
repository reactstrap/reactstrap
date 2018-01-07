import React from 'react';
import { warnOnce } from './utils';
import Dropdown from './Dropdown';

const NavDropdown = (props) => {
  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
  return <Dropdown nav {...props} />;
};

export default NavDropdown;