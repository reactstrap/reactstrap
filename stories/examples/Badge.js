import React from 'react';
import { Badge } from 'reactstrap';
import { colors } from './options';

const Example = (args) => {
  return (
    <div>
      <Badge {...args} />
    </div>
  );
}

Example.args = {
  children: 'New',
  color: 'primary',
  pill: false
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors
  }
};

export default Example;
