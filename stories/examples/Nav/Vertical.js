import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
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
      story: 'Stack your navigation by changing the flex item direction with the `vertical` prop. Need to stack them on some viewports but not others? Use the responsive versions `vertical="sm"`.'
    }
  }
}
