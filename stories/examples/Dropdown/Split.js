import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  UncontrolledDropdown,
} from 'reactstrap';

const Example = (args) => {
  return (
    <UncontrolledDropdown group>
      <Button color="primary">Primary</Button>
      <DropdownToggle caret color="primary" />
      <DropdownMenu {...args}>
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
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Create split button dropdowns with virtually the same markup as single button dropdowns.',
    },
  },
};
