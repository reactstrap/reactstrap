import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { colors } from './options';

const Example = (args) => {
  return (
    <div>
      <Card {...args}>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

Example.args = {
  color: undefined,
  outline: false,
  inverse: false,	
  body: false,
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors
  }
};	

export default Example;
