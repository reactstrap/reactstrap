import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <ListGroup flush>
      <ListGroupItem disabled tag="a" href="#">
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  );
};

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `flush` prop to `ListGroup` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container.',
    },
  },
};

export default Example;
