import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { getPlaceholderImg } from './util';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={getPlaceholderImg({ w: 318, h: 180 })} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>03:26 PM - 
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
