import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { colors } from '../options';

const Example = (args) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>This is some text within a card body.</CardText>
      </CardBody>
    </Card>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'The building block of a card is the `CardBody` Use it whenever you need a padded section within a card.'
    }
  }
}