import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" /> Some other input
        </Label>
      </FormGroup>
    </Form>
  );
}

export default Example;
 