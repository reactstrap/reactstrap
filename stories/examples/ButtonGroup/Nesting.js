import React from 'react';
import {
  Button,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Example = (props) => {
  return (
    <ButtonGroup className="my-2">
      <Button color="secondary">Left</Button>
      <Button color="secondary">Middle</Button>
      <ButtonGroup>
        <UncontrolledDropdown>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Place a `ButtonGroup` within another `ButtonGroup` when you want dropdown menus mixed with a series of buttons.',
    },
  },
};
