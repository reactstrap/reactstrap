import React from 'react';
import { Alert } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Alert color="success">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert color="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </Alert>
      <Alert color="warning">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </Alert>
      <Alert color="danger">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
    </div>
  );
};

export default Example;
