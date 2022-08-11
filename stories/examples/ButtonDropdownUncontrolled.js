/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';

function Example(props) {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
}

export default Example;
