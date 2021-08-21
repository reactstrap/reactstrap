import React from 'react';
import { Placeholder, Card, CardTitle, CardText, CardBody, CardImg, PlaceholderButton } from 'reactstrap';

const Example = (props) => {
  return (
    <Card>
      <CardImg src="holder.js/100px180" />
      <CardBody>
        <Placeholder animation="glow" tag={CardTitle} className="h5">
          <Placeholder xs={7} />
        </Placeholder>
        <Placeholder tag={CardText} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <PlaceholderButton xs={6}></PlaceholderButton>
      </CardBody>
    </Card>
  );
};

export default Example;