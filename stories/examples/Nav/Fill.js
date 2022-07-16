import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Example(props) {
  return (
    <Nav pills fill>
      <NavItem>
        <NavLink href="#" active>
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Much Longer Nav Link</NavLink>
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
      story:
        'Force your `Nav` contents to extend the full available width one of two props. To proportionately fill all available space with your `NavItem`, use `fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.',
    },
  },
};
