import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

function Example(args) {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="dark">
        Primary
      </DropdownToggle>
      <DropdownMenu {...args} dark>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Opt into darker dropdowns to match a dark navbar or custom style by adding `dark` prop onto an existing `DropdownMenu`.',
    },
  },
};
