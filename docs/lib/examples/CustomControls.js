import React from 'react';

import { CustomCheckbox, Form, FormGroup, Label } from 'reactstrap';

function Example() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleCheckbox">Checkboxes</Label>
        <div>
          <CustomCheckbox description="Check this custom checkbox" />
          <CustomCheckbox description="Or this one" />
        </div>
      </FormGroup>
    </Form>
  );
}

export default Example;
