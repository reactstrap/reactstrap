import React from 'react';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';
import ButtonDropdownExample from './ButtonDropdown';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton><ButtonDropdownExample /></InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton><ButtonDropdownExample /></InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default Example;
