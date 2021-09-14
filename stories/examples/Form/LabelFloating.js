import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <p>Wrap a pair of <code>&lt;Input&gt;</code> and <code>&lt;Label&gt;</code> components in <code>&lt;FormGroup floating&gt;</code> to enable floating labels with Bootstrap’s textual form fields. A <code>placeholder</code> is required on each <code>&lt;Input&gt;</code> as our method of CSS-only floating labels uses the <code>:placeholder-shown</code> pseudo-element. Also note that the <code>&lt;Input&gt;</code> must come first so we can utilize a sibling selector (e.g., <code>~</code>).</p>
      <Form inline>
        <FormGroup floating>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          <Label for="examplePassword">Password</Label>
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default Example;
