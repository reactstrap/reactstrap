import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Example(props) {
  const [state, setState] = useState(true);

  return (
    <Form>
      <FormGroup switch>
        <Input type="switch" role="switch" />
        <Label check>Default switch checkbox input</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={state}
          onChange={() => {
            setState(!state);
          }}
        />
        <Label check>Checked switch checkbox input</Label>
      </FormGroup>
      <FormGroup switch disabled>
        <Input type="switch" disabled />
        <Label check>Disabled switch checkbox input</Label>
      </FormGroup>
      <FormGroup switch disabled>
        <Input type="switch" checked disabled />
        <Label check>Default switch checkbox input</Label>
      </FormGroup>
    </Form>
  );
}

export default Example;
