import React from 'react';
import { Spinner } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
        <Spinner color="light" />
        <Spinner color="dark" />
      </div>
    );
  }
}
