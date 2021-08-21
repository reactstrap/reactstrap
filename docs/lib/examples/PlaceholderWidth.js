import React from 'react';
import { Placeholder,  } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Placeholder xs={10} />
      <Placeholder style={{width: '25%'}} />
    </div>
  )
}

export default Example;