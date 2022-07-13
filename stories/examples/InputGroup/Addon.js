import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupText>To the Left!</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>To the Left!</InputGroupText>
        <Input placeholder="and..." />
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroup>
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Multiple add-ons are supported and can be mixed with checkbox and radio input versions.',
    },
  },
};
