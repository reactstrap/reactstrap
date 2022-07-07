import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <Progress value={2 * 5} className="my-3" />
      <Progress color="success" value="25" className="my-3" />
      <Progress color="info" value={50} className="my-3" />
      <Progress color="warning" value={75} className="my-3" />
      <Progress color="danger" value="100" className="my-3" />
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Pass color prop to change the appearance of individual progress bars.'
    }
  }
}