import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input, Row } from 'reactstrap';

function Example(props) {
  return (
    <Form>
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col>
          <Label for="exampleEmail" className="visually-hidden">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </Col>
        <Col>
          <Label for="examplePassword" className="visually-hidden">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </Col>
        <Col>
          <FormGroup check>
            <Input type="checkbox" name="checkbox" id="exampleCheckbox" />
            <Label check for="exampleCheckbox">
              Remember Me
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <Button>Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Example;
