import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="primary" size="lg">
        Large
      </Button>{' '}
      <Button color="secondary">Normal</Button>{' '}
      <Button color="success" size="sm">
        Small
      </Button>{' '}
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Fancy larger or smaller buttons? Add `size` prop with `lg` or `sm` values to make button bigger or smaller.',
    },
  },
};
