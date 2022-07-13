import React from 'react';
import { Spinner } from 'reactstrap';
import { colors } from '../options';

const Example = (args) => {
  return (
    <>
      {colors.map((color) => (
        <Spinner color={color} key={color} />
      ))}
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'All standard visual variant colors can be applied for the spinner.',
    },
  },
};
