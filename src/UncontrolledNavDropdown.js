import React from 'react';
import { warnOnce } from './utils';
import UncontrolledDropdown from './UncontrolledDropdown';

const UncontrolledNavDropdown = () => {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

  return <UncontrolledDropdown nav {...this.props} />;
};

export default UncontrolledNavDropdown;
