import React from 'react';
import { Badge } from 'reactstrap';
import { colors } from '../options';

function Example(args) {
  return <Badge {...args} />;
}

Example.args = {
  children: 'New',
  color: 'primary',
  pill: false,
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors,
  },
};

export default Example;
