import React from 'react';
import { Spinner } from 'reactstrap';
import { colors } from '../options';

const Example = (props) => {
  return (
    <>
      {colors.map((color) => (
        <Spinner type="grow" color={color} key={color} />
      ))}
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow! Once again you can apply all the colors as above.',
    },
  },
};
