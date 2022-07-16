import React from 'react';
import { Alert } from 'reactstrap';
import { colors } from '../options';

function Example(args) {
  return <Alert {...args} dismiss={() => {}} isOpen />;
}

Example.args = {
  children: 'Hey! Pay attention.',
  color: 'primary',
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors,
  },
};

export default Example;
