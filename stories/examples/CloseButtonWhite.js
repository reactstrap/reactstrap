
import React from 'react';
import { CloseButton } from 'reactstrap';

const Example = (args) => {
  return (
    <div className='bg-dark p-3'>
      <CloseButton {...args}/>
    </div>
  )
}

Example.args= {
  disabled: false,
  variant: 'white'
}

export default Example;