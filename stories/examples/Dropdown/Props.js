import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Props from '../Props';

const Example = () => (
  <Props components={[Dropdown, DropdownToggle, DropdownMenu, DropdownItem]} />
);

export default Example;
