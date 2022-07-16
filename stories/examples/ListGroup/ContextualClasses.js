import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Example(props) {
  return (
    <ListGroup>
      <ListGroupItem color="success">Cras justo odio</ListGroupItem>
      <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
      <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
    </ListGroup>
  );
}

Example.parameters = {
  docs: {
    description: {
      story:
        'Use contextual classes to style list items with a stateful background and color.',
    },
  },
};

export default Example;
