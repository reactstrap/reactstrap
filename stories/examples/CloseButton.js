import React from 'react';
import { CloseButton } from 'reactstrap';

const Example = (args) => {
  return (
    <CloseButton {...args}/>
  )
}

Example.args= {
  disabled: false,
}

export default Example;