import React from 'react';
import { Label } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Label>default</Label>
        <Label color="primary">primary</Label>
        <Label color="success">success</Label>
        <Label color="info">info</Label>
        <Label color="warning">warning</Label>
        <Label color="danger">danger</Label>
      </div>
    );
  }
}
