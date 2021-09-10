import React from 'react';
import { Alert } from 'reactstrap';
import { colors } from './options';

const Example = (args) => {
  return (
    <div>
      <Alert {...args} />
    </div>
  );
};

Example.args = {
  children: 'Hey! Pay attention.',
  color: 'primary',
  dismissible: false
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors
  }
};

export default Example;
