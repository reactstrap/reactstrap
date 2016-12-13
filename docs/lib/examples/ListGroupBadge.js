import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem><Badge pill className="float-xs-right">14</Badge>Cras justo odio</ListGroupItem>
        <ListGroupItem><Badge pill className="float-xs-right">2</Badge>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem><Badge pill className="float-xs-right">1</Badge>Morbi leo risus</ListGroupItem>
      </ListGroup>
    );
  }
}
