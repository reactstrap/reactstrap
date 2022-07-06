import React from 'react';
import { CloseButton } from 'reactstrap';

const Example = (args) => {
  return (
    <CloseButton disabled />
  )
}
export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Disabled close buttons change their opacity. Italso applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.'
    }
  }
}