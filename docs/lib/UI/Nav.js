import React from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
  return (
    <Navbar className="header" full color="faded" light>
      <Container>
        <NavbarBrand className="mr-auto" tag={Link} to="/">reactstrap</NavbarBrand>
        <Nav navbar className="ml-sm-auto">
          <NavItem>
            <NavLink tag={Link} className="nav-link" to="/components/" activeClassName="active">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
