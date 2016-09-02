import React from 'react';
import { Alert } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Alert color="success">success</Alert>
        <Alert color="info">info</Alert>
        <Alert color="warning">warning</Alert>
        <Alert color="danger">danger</Alert>
      </div>
    );
  }
}
