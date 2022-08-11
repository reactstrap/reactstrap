import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Example(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
        />
      </FormGroup>{' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />
      </FormGroup>{' '}
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;
