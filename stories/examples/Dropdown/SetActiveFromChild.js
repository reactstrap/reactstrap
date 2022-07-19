import React from 'react';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Example(args) {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink href="#" disabled>Inactive Link</NavLink>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="#" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
}