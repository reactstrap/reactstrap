import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  return (
    <ButtonGroup vertical>
      <Button color="danger">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="success">Button</Button>
    </ButtonGroup>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**',
    },
  },
};
