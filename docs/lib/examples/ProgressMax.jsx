import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <div className="text-xs-center">1 of 5</div>
      <Progress value="1" max="5" />
      <div className="text-xs-center">50 of 135</div>
      <Progress value={50} max="135" />
      <div className="text-xs-center">75 of 111</div>
      <Progress value={75} max={111} />
      <div className="text-xs-center">463 of 500</div>
      <Progress value="463" max={500} />
    </div>
  );
};

export default Example;
