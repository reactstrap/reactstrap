import React from 'react';
import { Alert } from 'reactstrap';
import { colors } from '../options';

const Example = (props) => {
  return (
    <>
      {colors.map((color) => (
        <Alert color={color} key={color}>
          This is a primary alert — check it out!
        </Alert>

      ))}
    </>
  );
};

export default Example;
