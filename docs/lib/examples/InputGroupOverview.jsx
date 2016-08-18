import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>
          <Input addon type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon>@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Example;
