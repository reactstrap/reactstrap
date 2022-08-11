import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

function Example(props) {
  return (
    <div>
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>
          <Input
            addon
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </InputGroupText>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupText>@example.com</InputGroupText>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      </InputGroup>
    </div>
  );
}

export default Example;
