import React from 'react';
import { Form, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <Input className="mb-3" placeholder="lg" bsSize="lg" />
      <Input className="mb-3" placeholder="default" />
      <Input className="mb-3" placeholder="sm" bsSize="sm" />
      <Input className="mb-3" type="select" bsSize="lg">
        <option>Large Select</option>
      </Input>
      <Input className="mb-3" type="select">
        <option>Default Select</option>
      </Input>
      <Input className="mb-3" type="select" bsSize="sm">
        <option>Small Select</option>
      </Input>
    </Form>
  );
}

export default Example;
