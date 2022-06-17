
import React from 'react';
import { Placeholder } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Placeholder tag='p' animation='glow'>
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder tag='p' animation='wave'>
        <Placeholder xs={12} />
      </Placeholder>
    </>
  )
}

export default Example;