import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress animated value={2 * 5} />
      <Progress animated color="success" value="25" />
      <Progress animated color="info" value={50} />
      <Progress animated color="warning" value={75} />
      <Progress animated color="danger" value="100" />
    </div>
  );
};

export default Example;
