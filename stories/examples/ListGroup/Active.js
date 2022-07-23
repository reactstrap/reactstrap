import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Example(args) {
  return (
    <ListGroup {...args}>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
}

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `active` prop to a `ListGroupItem` to indicate the current active selection.',
    },
  },
};

export default Example;
