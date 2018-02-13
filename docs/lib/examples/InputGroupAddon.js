import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Example;
