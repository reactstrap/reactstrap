import React from 'react';
import { Placeholder,  } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Placeholder xs={12} size="lg"/>
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm"/>
      <Placeholder xs={12} size="xs"/>
    </div>
  )
}

export default Example;