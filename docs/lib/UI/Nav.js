import React from 'react';
import { Link } from 'react-router';
import { NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import DocSearch from './DocSearch';

export default () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const toggleNavbar = e => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };

  return (
    <Navbar className="header" color="faded" light expand="md">
      <Container>
        <NavbarBrand className="mr-auto" tag={Link} to="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar isOpen={showNavbar}>
          <Nav navbar className="ml-sm-auto">
            <NavItem>
              <DocSearch />
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/components/" activeClassName="active">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/utilities/" activeClassName="active">Utilities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold" tag={Link} to="/premium-themes/" activeClassName="active">
                Premium Themes
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
