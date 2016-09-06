import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Example;
