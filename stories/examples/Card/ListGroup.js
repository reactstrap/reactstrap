import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

const Example = (args) => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardHeader>Featured</CardHeader>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>And a third item</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Create lists of content in a card with a flush list group.',
    },
  },
};
