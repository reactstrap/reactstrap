import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="primary" tag="a" href="#">Link</Button>{' '}
      <Button color="primary" tag="input" type="submit" value="Submit" />{' '}
      <Button color="primary" tag="input" type="reset" value="Reset" />{' '}
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'The button classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements'
    }
  }
}