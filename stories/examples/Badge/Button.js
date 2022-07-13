import React from 'react';
import { Badge, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="primary" outline>
        Notifications <Badge color="secondary">4</Badge>
      </Button>
    </div>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Badges can be used as part of links or buttons to provide a counter.',
    },
  },
};
