import React from 'react';
import { warnOnce } from './utils';
import UncontrolledDropdown from './UncontrolledDropdown';

const UncontrolledNavDropdown = (props) => {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

  return <UncontrolledDropdown nav {...props} />;
};

export default UncontrolledNavDropdown;
