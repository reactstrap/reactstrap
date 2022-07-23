import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Example(args) {
  return (
    <Nav {...args}>
      <NavItem>
        <NavLink active href="#">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

Example.args = {
  tabs: false,
  pills: false,
  vertical: false,
  justified: false,
  fill: false,
  card: false,
};

export default Example;
