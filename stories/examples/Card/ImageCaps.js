import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <Card className="my-2">
        <CardImg
          top
          width="100%"
          src="https://picsum.photos/900/180"
          alt="Card image cap"
          style={{ height: 180 }}
        />
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="https://picsum.photos/900/180"
          alt="Card image cap"
          style={{ height: 180 }}
        />
      </Card>
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.',
    },
  },
};
