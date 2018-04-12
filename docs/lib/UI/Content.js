import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = ({ item }) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={item.to} activeClassName="active">
        {item.name}
      </NavLink>
    </NavItem>
  );
};

ComponentLink.propTypes = {
  item: PropTypes.object,
};

const propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
};

function Content({ items, children }) {
  return (
    <Container className="content">
      <Row>
        <Col md={{ size: 3, order: 2 }}>
          <div className="docs-sidebar mb-3">
            <h5>Utilities</h5>
            <Nav className="flex-column">
              {items.map(item => (
                <NavItem key={item.to}>
                  <NavLink tag={Link} to={item.to} activeClassName="active">
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </Col>
        <Col md={{ size: 9, order: 1 }} className="docSearch-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
Content.propTypes = propTypes;
export default Content;
