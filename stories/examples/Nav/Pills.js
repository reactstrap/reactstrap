import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Example(props) {
  return (
    <Nav pills>
      <NavItem>
        <NavLink href="#" active>
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
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

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Take the same component and add `pills` prop.',
    },
  },
};
