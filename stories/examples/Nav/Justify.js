import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <Nav justified pills>
      <NavItem>
        <NavLink href="#" active>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Much Longer Nav Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'For equal-width elements, use `justified`. All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width.'
    }
  }
}