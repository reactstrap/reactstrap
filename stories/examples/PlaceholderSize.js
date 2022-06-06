import React from 'react';
import { Placeholder } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Placeholder xs={12} size='lg' />
      <Placeholder xs={12} />
      <Placeholder xs={12} size='sm' />
      <Placeholder xs={12} size='xs' />
    </>
  )
}

export default Example;