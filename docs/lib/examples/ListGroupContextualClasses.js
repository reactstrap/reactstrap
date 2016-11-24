import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem success>Cras justo odio</ListGroupItem>
        <ListGroupItem info>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem warning>Morbi leo risus</ListGroupItem>
        <ListGroupItem danger>Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    );
  }
}
