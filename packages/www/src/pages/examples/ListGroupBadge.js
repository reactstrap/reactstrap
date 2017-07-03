import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>
    );
  }
}
