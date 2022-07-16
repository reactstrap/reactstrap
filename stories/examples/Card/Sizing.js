import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Example(props) {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated.You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.\n\nUsing the grid, wrap cards in columns and rows as needed.',
    },
  },
};
