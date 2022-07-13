import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const Example = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
      </CardBody>
      <img
        width="100%"
        src="https://picsum.photos/318/180"
        alt="Card image cap"
      />
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        '\
Cards support a wide variety of content, including images, text, list groups, links, and more\n\n\
The building block of a card is the `CardBody` Use it whenever you need a padded section within a card.\n\n\
Card titles are used by adding `CardTitle` with an optional `h*` prop. In the same way, links are added and placed next to each other by adding `CardLink`',
    },
  },
};
