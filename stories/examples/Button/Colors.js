import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button> <Button color="link">link</Button>
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'There are several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.',
    },
  },
};
