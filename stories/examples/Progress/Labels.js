import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress value="25" className="my-2">25%</Progress>
      <Progress value={50} className="my-2">1/2</Progress>
      <Progress value={75} className="my-2">You're almost there!</Progress>
      <Progress color="success" value="100" className="my-2">You did it!</Progress>
      <Progress multi className="my-2">
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="30">Wow!</Progress>
        <Progress bar color="info" value="25">Cool</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">!!</Progress>
      </Progress>
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Add labels to your progress bars by passing children to `Progress` component.'
    }
  }
}