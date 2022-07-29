import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function Example(props) {
  return (
    <div>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Not a fan of state, we got you covered.',
    },
  },
};
