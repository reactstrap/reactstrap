import React from 'react';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton>To the Left!</InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton color="secondary">To the Right!</InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton color="danger">To the Left!</InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton color="success">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default Example;
