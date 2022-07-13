import React from 'react';
import { Alert } from 'reactstrap';
import { colors } from '../options';
import { ArgsTable } from '@storybook/addon-docs';

const Example = (args) => {
  return (
    <>
      <Alert {...args} dismiss={() => {}} isOpen={true} />
    </>
  );
};

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
