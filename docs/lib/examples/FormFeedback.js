import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <p>Invalid checkboxes (or radio)</p>
        <FormGroup check>
          <Input id="cityNewyork" type="checkbox" />
          <Label for="cityNewyork" check>New York</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="invalidCityCheckbox" type="checkbox" invalid/>
          <Label for="invalidCityCheckbox" check>Gotham</Label>
          <FormFeedback>Gotham is not a real city.</FormFeedback>
        </FormGroup>
      </Form>
    );
  }
}
