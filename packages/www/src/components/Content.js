import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const Content = props => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
