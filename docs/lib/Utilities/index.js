import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
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

class Utilities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Colors',
          to: '/utilities/colors/'
        },
        {
          name: 'Clearfix',
          to: '/utilities/clearfix/'
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
              <h5>Utilities</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
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
Utilities.propTypes = propTypes;
export default Utilities;
