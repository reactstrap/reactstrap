import React from 'react';
import { ListGroup, ListGroupItem, Tag } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem><Tag pill className="float-xs-right">14</Tag>Cras justo odio</ListGroupItem>
        <ListGroupItem><Tag pill className="float-xs-right">2</Tag>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem><Tag pill className="float-xs-right">1</Tag>Morbi leo risus</ListGroupItem>
      </ListGroup>
    );
  }
}
