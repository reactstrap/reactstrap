import React from 'react';
import { Spinner } from 'reactstrap';

function Example(props) {
  return (
    <>
      <Spinner color="primary" size="sm" />
      <Spinner type="grow" color="primary" size="sm" />
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `size="sm` to make a smaller spinner that can quickly be used within other components.',
    },
  },
};
