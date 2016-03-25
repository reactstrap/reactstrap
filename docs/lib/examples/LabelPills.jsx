import React from 'react';
import { Label } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Label color="default" pill>default</Label>
        <Label color="primary" pill>primary</Label>
        <Label color="success" pill>success</Label>
        <Label color="info" pill>info</Label>
        <Label color="warning" pill>warning</Label>
        <Label color="danger" pill>danger</Label>
      </div>
    );
  }
}
