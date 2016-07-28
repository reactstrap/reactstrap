import React from 'react';
import { Tag } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Tag color="default" pill>default</Tag>
        <Tag color="primary" pill>primary</Tag>
        <Tag color="success" pill>success</Tag>
        <Tag color="info" pill>info</Tag>
        <Tag color="warning" pill>warning</Tag>
        <Tag color="danger" pill>danger</Tag>
      </div>
    );
  }
}
