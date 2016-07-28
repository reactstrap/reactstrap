import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="outline-primary">primary</Button>
        <Button color="outline-secondary">secondary</Button>
        <Button color="outline-success">success</Button>
        <Button color="outline-info">info</Button>
        <Button color="outline-warning">warning</Button>
        <Button color="outline-danger">danger</Button>
      </div>
    );
  }
}
