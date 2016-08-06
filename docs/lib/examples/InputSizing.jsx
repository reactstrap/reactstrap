import React from 'react';
import { Form, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="lg" size="lg" />
        <Input placeholder="default" />
        <Input placeholder="sm" size="sm" />
        <Input type="select" size="lg">
          <option>Large Select</option>
        </Input>
        <Input type="select">
          <option>Default Select</option>
        </Input>
        <Input type="select" size="sm">
          <option>Small Select</option>
        </Input>
      </Form>
    );
  }
}
