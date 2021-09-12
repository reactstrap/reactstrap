import React from 'react';
import { Spinner } from 'reactstrap';
import { colors } from './options';

const Example = (args) => {
  return (
    <Spinner {...args} />
  );
}

Example.args = {
  type: 'border'
};

Example.argTypes = {
  type: {
    control: { type: 'select' },
    options: ['border', 'grow']
  },
  color: {
    control: { type: 'select' },
    options: colors
  },
  size: {
    control: { type: 'select' },
    options: ['', 'sm']
  },
};
export default Example;
