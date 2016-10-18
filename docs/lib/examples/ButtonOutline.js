import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
      </div>
    );
  }
}
