import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, NavbarCollapse, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={() => { this.toggle(); }} />
          <NavbarCollapse collapsed={this.state.collapsed}>
            <Nav className="pull-xs-right" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  }
}
