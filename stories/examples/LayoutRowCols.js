import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <h6>xs="2"</h6>
      <Row xs="2">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="3"</h6>
      <Row xs="3">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="4"</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="4"</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border" xs="6">
          xs="6"
        </Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="1" sm="2" md="4"</h6>
      <Row xs="1" sm="2" md="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
    </Container>
  );
};

export default Example;
