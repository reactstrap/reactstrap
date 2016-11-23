import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="default" pill>default</Badge>{' '}
        <Badge color="primary" pill>primary</Badge>{' '}
        <Badge color="success" pill>success</Badge>{' '}
        <Badge color="info" pill>info</Badge>{' '}
        <Badge color="warning" pill>warning</Badge>{' '}
        <Badge color="danger" pill>danger</Badge>
      </div>
    );
  }
}
