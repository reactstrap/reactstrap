import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

const Example = (props) => {
  return (
    <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'And if you are not a fan of using state, you can always use `UncontrolledAlert`.'
    }
  },
}