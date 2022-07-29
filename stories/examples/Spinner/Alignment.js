import React from 'react';
import { Spinner } from 'reactstrap';

function Example(props) {
  return <Spinner className="m-5" color="primary" />;
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Spinners in Bootstrap are built with rems, currentColor, and display: inline-flex. ' +
        'This means they can easily be resized, recolored, and quickly aligned. ' +
        '\n\n Use margin utilities like `.m-5` for easy spacing',
    },
  },
};
