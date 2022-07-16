import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

function Example(props) {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupText>@lg</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@normal</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupText>@sm</InputGroupText>
        <Input />
      </InputGroup>
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Add the relative form sizing classes to the `InputGroup` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.',
    },
  },
};
