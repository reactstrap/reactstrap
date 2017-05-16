import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
      <h4>Custom color</h4>
      <Progress customColor="#7F4161" value={50} />
      <Progress customColor="yellow" value={75} />
    </div>
  );
};

export default Example;
