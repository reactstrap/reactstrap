import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <ButtonGroup size="lg" className="my-2">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="my-2">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm" className="my-2">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Instead of applying button sizing classes to every button in a group, just add `size` prop to each `ButtonGroup`, including each one when nesting multiple groups.'
    }
  },
}