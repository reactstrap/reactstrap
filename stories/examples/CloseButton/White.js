import React from 'react';
import { CloseButton } from 'reactstrap';

const Example = (args) => {
  return (
    <div className="bg-dark p-3">
      <CloseButton variant="white" />
    </div>
  );
};

Example.parameters = {
  docs: {
    description: {
      story:
        'Change the default `ButtonClose` to be white with the `variant` prop. ',
    },
  },
};

export default Example;
