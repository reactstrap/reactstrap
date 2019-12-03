import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row colsXs="2">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row colsXs="3">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row colsXs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row colsXs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col xs="6">Column</Col>
        <Col>Column</Col>
      </Row>
      <Row colsXs="1" colsSm="2" colsMd="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
}

export default Example;
