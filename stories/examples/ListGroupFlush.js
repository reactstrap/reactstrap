import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <ListGroup flush>
      <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );

}

export default Example;
