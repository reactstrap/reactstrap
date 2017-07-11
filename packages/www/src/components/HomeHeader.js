import React from 'react';
import Link from 'gatsby-link';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';

const HomeHeader = () => {
  return (
    <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
      <Container>
        <Row>
          <Col>
            <p className="lead">
              <img src={require('../images/logo.png')} alt="" width="150px" />
            </p>
            <h1 className="jumbotron-heading display-4">reactstrap</h1>
            <p className="lead">Easy to use React Bootstrap 4 components</p>
            <p>
              <Button
                outline
                color="danger"
                href="https://github.com/reactstrap/reactstrap"
              >
                View on Github
              </Button>
              <Button color="danger" tag={Link} to="/components/">
                View Components
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default HomeHeader;
