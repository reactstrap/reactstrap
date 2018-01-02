import React from 'react';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton addonType="prepend">To the Left!</InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton addonType="append" color="secondary">To the Right!</InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton addonType="prepend" color="danger">To the Left!</InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton addonType="append" color="success">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default Example;
