import React from 'react';
import { Tag } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Tag>default</Tag>
        <Tag color="primary">primary</Tag>
        <Tag color="success">success</Tag>
        <Tag color="info">info</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="danger">danger</Tag>
      </div>
    );
  }
}
