import React from 'react';
import { Progress } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Progress value={45} style={{ height: '3px' }} className="my-3" />
      <Progress value={45} style={{ height: '20px' }} className="my-3" />
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Change style `height` and `Progress` will automatically resize accordingly.',
    },
  },
};
