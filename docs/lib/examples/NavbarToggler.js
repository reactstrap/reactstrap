import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
          <div className={classnames('collapse', 'navbar-toggleable-md', {in: !this.state.collapsed})}>
            <Nav className="float-sm-left float-md-right" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
