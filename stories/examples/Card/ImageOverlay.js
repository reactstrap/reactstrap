import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

function Example(props) {
  return (
    <div>
      <Card inverse>
        <CardImg
          width="100%"
          src="https://picsum.photos/900/270?grayscale"
          alt="Card image cap"
          style={{ height: 270 }}
        />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.',
    },
  },
};
