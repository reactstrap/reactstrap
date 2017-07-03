import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>{' '}
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword">Password</Label>{' '}
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}
