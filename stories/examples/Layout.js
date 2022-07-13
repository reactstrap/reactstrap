import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col className="bg-light border">.col</Col>
      </Row>
      <Row>
        <Col className="bg-light border">.col</Col>
        <Col className="bg-light border">.col</Col>
        <Col className="bg-light border">.col</Col>
        <Col className="bg-light border">.col</Col>
      </Row>
      <Row>
        <Col className="bg-light border" xs="3">
          .col-3
        </Col>
        <Col className="bg-light border" xs="auto">
          .col-auto - variable width content
        </Col>
        <Col className="bg-light border" xs="3">
          .col-3
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border" xs="6">
          .col-6
        </Col>
        <Col className="bg-light border" xs="6">
          .col-6
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border" xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col className="bg-light border" xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col className="bg-light border" sm="4">
          .col-sm-4
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border" sm={{ size: 6, order: 2, offset: 1 }}>
          .col-sm-6 .order-sm-2 .offset-sm-1
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border" sm="12" md={{ size: 6, offset: 3 }}>
          .col-sm-12 .col-md-6 .offset-md-3
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border" sm={{ size: 'auto', offset: 1 }}>
          .col-sm-auto .offset-sm-1
        </Col>
        <Col className="bg-light border" sm={{ size: 'auto', offset: 1 }}>
          .col-sm-auto .offset-sm-1
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
