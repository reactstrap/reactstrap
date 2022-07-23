import React from 'react';
import { CloseButton } from 'reactstrap';

function Example(args) {
  return <CloseButton {...args} />;
}

Example.args = {
  disabled: false,
};

export default Example;
