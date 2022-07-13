import React from 'react';
import { Progress } from 'reactstrap';
import { colors } from '../options';

const Example = (args) => {
  return <Progress {...args} />;
};

Example.args = {
  value: 50,
  animated: false,
  striped: false,
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors,
  },
  value: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
    },
  },
};

export default Example;
