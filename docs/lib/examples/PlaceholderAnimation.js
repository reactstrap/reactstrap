import React from 'react';
import { Placeholder,  } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Placeholder tag="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder tag="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </div>
  )
}

export default Example;