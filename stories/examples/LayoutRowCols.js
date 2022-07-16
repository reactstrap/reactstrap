import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Example(props) {
  return (
    <Container>
      <h6>xs=&ldquo;2&ldquo;</h6>
      <Row xs="2">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs=&ldquo;3&ldquo;</h6>
      <Row xs="3">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs=&ldquo;4&ldquo;</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs=&ldquo;4&ldquo;</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border" xs="6">
          xs=&ldquo;6&ldquo;
        </Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs=&ldquo;1&ldquo; sm=&ldquo;2&ldquo; md=&ldquo;4&ldquo;</h6>
      <Row xs="1" sm="2" md="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
    </Container>
  );
}

export default Example;
