import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <div className="text-xs-center">0%</div>
      <Progress />
      <div className="text-xs-center">25%</div>
      <Progress value="25" />
      <div className="text-xs-center">50%</div>
      <Progress value={50} />
      <div className="text-xs-center">75%</div>
      <Progress value={75} />
      <div className="text-xs-center">100%</div>
      <Progress value="100" />
      <div className="text-xs-center">Multiple bars</div>
      <Progress>
        <Progress value="15" />
        <Progress color="success" value="30" />
        <Progress color="info" value="25" />
        <Progress color="warning" value="20" />
        <Progress color="danger" value="5" />
      </Progress>
    </div>
  );
};

export default Example;
