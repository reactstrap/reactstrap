import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge>default</Badge>
        <Badge color="primary">primary</Badge>
        <Badge color="success">success</Badge>
        <Badge color="info">info</Badge>
        <Badge color="warning">warning</Badge>
        <Badge color="danger">danger</Badge>
      </div>
    );
  }
}
