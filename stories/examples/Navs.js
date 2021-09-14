import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (args) => {
  return (
    <div>
      <Nav {...args}>
        <NavItem>
          <NavLink active href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

Example.args = {
  tabs: false,
  pills: false,
  vertical: false,
  justified: false,
  fill: false
};

export default Example;
