import React from 'react';
import { Spinner, Button } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Button disabled color="primary">
        <Spinner size="sm" />
        <span> Loading</span>
      </Button>
    </>
  );
}

export default Example;


Example.parameters = {
  docs: {
    description: {
      story: 'Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.'
    }
  }
}