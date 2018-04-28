import React from 'react';

import { CustomCheckbox, CustomRadio, Form, FormGroup, Label } from 'reactstrap';

function Example() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleCheckbox">Checkboxes</Label>
        <div>
          <CustomCheckbox id="exampleCustomCheckbox" description="Check this custom checkbox" />
          <CustomCheckbox id="exampleCustomCheckbox2" description="Or this one" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Radios</Label>
        <div>
          <CustomRadio id="exampleCustomRadio" name="customRadio" description="Check this custom radio" />
          <CustomRadio id="exampleCustomRadio2" name="customRadio" description="Or this one" />
        </div>
      </FormGroup>
    </Form>
  );
}

export default Example;
