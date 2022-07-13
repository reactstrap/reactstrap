import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress striped value={2 * 5} className="my-3" />
      <Progress striped color="success" value="25" className="my-3" />
      <Progress striped color="info" value={50} className="my-3" />
      <Progress striped color="warning" value={75} className="my-3" />
      <Progress striped color="danger" value="100" className="my-3" />
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

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `striped` to any progress bar to apply a stripe via CSS gradient over the progress bar’s background color.',
    },
  },
};
