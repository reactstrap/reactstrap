import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress striped value={2 * 5} />
      <Progress striped color="success" value="25" />
      <Progress striped color="info" value={50} />
      <Progress striped color="warning" value={75} />
      <Progress striped color="danger" value="100" />
      <Progress multi>
        <Progress striped bar value="10" />
        <Progress striped bar color="success" value="30" />
        <Progress striped bar color="warning" value="20" />
        <Progress striped bar color="danger" value="20" />
      </Progress>
    </div>
  );
};

export default Example;
