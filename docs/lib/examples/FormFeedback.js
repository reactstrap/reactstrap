import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Input with success</Label>
          <Input valid />
          <FormFeedback>
            <a href="https://github.com/twbs/bootstrap/issues/23372">A bug</a> fixed in (the currently
            unreleased) (
            <a href="https://github.com/twbs/bootstrap/pull/23377">PR</a>
            ) bootstrap <a href="https://github.com/twbs/bootstrap/issues/23278">v4 beta-2</a> shows invalid-feedback
            with is-valid inputs.
          </FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Input with danger</Label>
          <Input valid={false} />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>
    );
  }
}
