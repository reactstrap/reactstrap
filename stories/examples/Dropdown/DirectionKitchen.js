import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const directions = ['up', 'down', 'end', 'start'];

export default function Example(args) {
  return (
    <div className="d-flex p-5 justify-content-center">
      {directions.map((direction) => (
        <UncontrolledDropdown direction={direction} className="me-2">
          <DropdownToggle caret color="primary">
            {`Drop${direction}`}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ))}
    </div>
  );
}

Example.parameters = {
  docs: {
    description: {
      story:
        'Trigger dropdown menus at the direction you want using the `direction` prop.',
    },
  },
};
