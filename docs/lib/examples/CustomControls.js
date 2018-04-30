import React from 'react';
import { CustomCheckbox, CustomRadio, Form, FormGroup, Label } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomCheckbox id="exampleCustomCheckbox" description="Check this custom checkbox" />
            <CustomCheckbox id="exampleCustomCheckbox2" description="Or this one" />
            <CustomCheckbox id="exampleCustomCheckbox3" description="But not this disabled one" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Radios</Label>
          <div>
            <CustomRadio id="exampleCustomRadio" name="customRadio" description="Select this custom radio" />
            <CustomRadio id="exampleCustomRadio2" name="customRadio" description="Or this one" />
            <CustomRadio id="exampleCustomRadio3" description="But not this disabled one" disabled />
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Inline</Label>
          <div>
            <CustomCheckbox id="exampleCustomInline" description="An inline custom input" inline />
            <CustomCheckbox id="exampleCustomInline2" description="and another one" inline />
          </div>
        </FormGroup>
      </Form>
    );
  }
}
