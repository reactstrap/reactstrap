import React from 'react';
import { Placeholder, Card, CardBody, CardTitle, CardText, PlaceholderButton } from 'reactstrap';

const Example = (args) => {
  return (
    <Card style={{ width: '18rem' }}>
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
  )
}

Example.args = {
  animation: 'wave'
};

Example.argTypes = {
  animation: {
    control: {
      type: 'select',
      options: ['wave', 'glow']
    }
  }
}

export default Example;