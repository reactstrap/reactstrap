import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <p>
        The <code>numbered</code> prop can be used to opt into numbered list
        group items.
      </p>
      <ListGroup numbered>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  );
};

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `number` prop to `ListGroup` to opt into numbered list group items. Numbers are generated via CSS (as opposed to a `<ol>`s default browser styling) for better placement inside list group items and to allow for better customization.',
    },
  },
};

export default Example;
