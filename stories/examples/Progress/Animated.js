import React from 'react';
import { Progress } from 'reactstrap';

function Example(props) {
  return (
    <div>
      <Progress animated value={2 * 5} className="my-3" />
      <Progress animated color="success" value="25" className="my-3" />
      <Progress animated color="info" value={50} className="my-3" />
      <Progress animated color="warning" value={75} className="my-3" />
      <Progress animated color="danger" value="100" className="my-3" />
      <Progress multi className="my-3">
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
      </Progress>
    </div>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'The striped gradient can also be animated. Add `animated` to the progress bar to animate the stripes right to left via CSS3 animations.',
    },
  },
};
