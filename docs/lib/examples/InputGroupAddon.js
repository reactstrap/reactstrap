import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Example;
