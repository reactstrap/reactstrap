import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};
const propTypes = {
  children: PropTypes.node
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Alerts',
          to: '/components/alerts/'
        },
        {
          name: 'Badge',
          to: '/components/badge/'
        },
        {
          name: 'Breadcrumbs',
          to: '/components/breadcrumbs/'
        },
        {
          name: 'Buttons',
          to: '/components/buttons/'
        },
        {
          name: 'Button Dropdown',
          to: '/components/button-dropdown/'
        },
        {
          name: 'Button Group',
          to: '/components/button-group/'
        },
        {
          name: 'Card',
          to: '/components/card/'
        },
        {
          name: 'Collapse',
          to: '/components/collapse/',
        },
        {
          name: 'Dropdowns',
          to: '/components/dropdowns/'
        },
        {
          name: 'Form',
          to: '/components/form/'
        },
        {
          name: 'Input Group',
          to: '/components/input-group/'
        },
        {
          name: 'Jumbotron',
          to: '/components/jumbotron/'
        },
        {
          name: 'Layout',
          to: '/components/layout/'
        },
        {
          name: 'List Group',
          to: '/components/listgroup/'
        },
        {
          name: 'Media',
          to: '/components/media/'
        },
        {
          name: 'Modals',
          to: '/components/modals/'
        },
        {
          name: 'Navbar',
          to: '/components/navbar/'
        },
        {
          name: 'Navs',
          to: '/components/navs/'
        },
        {
          name: 'Pagination',
          to: '/components/pagination/'
        },
        {
          name: 'Popovers',
          to: '/components/popovers/'
        },
        {
          name: 'Progress',
          to: '/components/progress/'
        },
        {
          name: 'Tables',
          to: '/components/tables/'
        },
        {
          name: 'Tabs',
          to: '/components/tabs/'
        },
        {
          name: 'Tooltips',
          to: '/components/tooltips/'
        }
      ]
    };
  }
  render() {
    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap/issues/13"><small>Additional Components</small></NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, pull: 3 }}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
Components.propTypes = propTypes;
export default Components;
