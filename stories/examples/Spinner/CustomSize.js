import React from 'react';
import { Spinner } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
      <Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }} />
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Or use custom css as needed'
    }
  }
}