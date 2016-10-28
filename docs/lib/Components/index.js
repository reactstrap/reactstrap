import React from 'react';
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
  children: React.PropTypes.node
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Buttons',
          to: '/components/buttons/'
        },
        {
          name: 'Button Group',
          to: '/components/button-group/'
        },
        {
          name: 'Button Dropdown',
          to: '/components/button-dropdown/'
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
          name: 'Breadcrumbs',
          to: '/components/breadcrumbs/'
        },
        {
          name: 'Tags',
          to: '/components/tags/'
        },
        {
          name: 'Card',
          to: '/components/card/'
        },
        {
          name: 'Navs',
          to: '/components/navs/'
        },
        {
          name: 'Navbar',
          to: '/components/navbar/'
        },
        {
          name: 'Tooltips',
          to: '/components/tooltips/'
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
          name: 'Modals',
          to: '/components/modals/'
        },
        {
          name: 'Layout',
          to: '/components/layout/'
        },
        {
          name: 'Tables',
          to: '/components/tables/'
        },
        {
          name: 'Media',
          to: '/components/media/'
        },
        {
          name: 'Pagination',
          to: '/components/pagination/'
        },
        {
          name: 'Tabs',
          to: '/components/tabs/'
        },
        {
          name: 'Jumbotron',
          to: '/components/jumbotron/'
        },
        {
          name: 'Alerts',
          to: '/components/alerts/'
        },
        {
          name: 'Collapse',
          to: '/components/collapse/',
        }
      ]
    };
  }
  render() {
    return (
      <Container fluid className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav>
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
