import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardLink,
} from 'reactstrap';

function Example(args) {
  return (
    <Card style={{ width: '18rem' }}>
      <img src="https://picsum.photos/300/200" alt="Card" />
      <CardBody>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardText>This is some text within a card body.</CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>And a third item</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Card Link</CardLink>
      </CardBody>
    </Card>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group-all wrapped in a fixed-width card.',
    },
  },
};
