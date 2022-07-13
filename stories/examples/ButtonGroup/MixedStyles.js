import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  return (
    <ButtonGroup>
      <Button color="danger">Left</Button>
      <Button color="warning">Middle</Button>
      <Button color="success">Right</Button>
    </ButtonGroup>
  );
};

export default Example;
