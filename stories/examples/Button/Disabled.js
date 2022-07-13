import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="primary" disabled>
        Disabled button
      </Button>{' '}
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Make buttons look inactive by adding the disabled prop to `Button`. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.',
    },
  },
};
