import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup check inline>
        <Input type="checkbox" />
        <Label check>Some input</Label>
      </FormGroup>
      <FormGroup check inline>
        <Input type="checkbox" />
        <Label check>Some other input</Label>
      </FormGroup>
    </Form>
  );
}

export default Example;
 