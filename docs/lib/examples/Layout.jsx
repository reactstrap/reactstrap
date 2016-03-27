import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>col-xs-12</Col>
        </Row>
        <Row>
          <Col xs="6">col-xs-6</Col>
          <Col xs="6">col-xs-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">col-xs-6 col-sm-4</Col>
          <Col xs="6" sm="4">col-xs-6 col-sm-4</Col>
          <Col sm="4">col-xs-12 col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col-xs-12 .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-xs-12 .col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
      </Container>
    );
  }
}
