import React from 'react';
import {
  Placeholder,
  Card,
  CardBody,
  CardTitle,
  CardText,
  PlaceholderButton,
  CardImg,
} from 'reactstrap';

const Example = (args) => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImg
        top
        width="100%"
        src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
        alt="Card image cap"
      />
      <CardBody>
        <Placeholder tag={CardTitle} animation={args.animation}>
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder tag={CardText} animation={args.animation}>
          <Placeholder xs={12} />
          <Placeholder xs={7} />
        </Placeholder>
        <PlaceholderButton xs={8} />
      </CardBody>
    </Card>
  );
};

Example.args = {
  animation: 'wave',
};

Example.argTypes = {
  animation: {
    control: {
      type: 'select',
      options: ['wave', 'glow'],
    },
  },
};

export default Example;
