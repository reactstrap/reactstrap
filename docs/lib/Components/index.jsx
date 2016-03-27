import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.item.to} activeClassName="active">
        {props.item.name}
      </Link>
    </li>
  );
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
          name: 'Labels',
          to: '/components/labels/'
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
          name: 'Modals',
          to: '/components/modals/'
        },
        {
          name: 'Layout',
          to: '/components/layout/'
        }
      ]
    };
  }
  render() {
    return (
      <Container fluid className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <div className="docs-sidebar m-b-3">
              <h5>Components</h5>
              <ul className="nav">
                { this.state.navItems.map((item, i) => {
                  return <NavItem key={i} item={item} />;
                })}
              </ul>
            </div>
          </Col>
          <Col md={{ size: 9, pull: 3 }} {...this.props}/>
        </Row>
      </Container>
    );
  }
}

export default Components;
