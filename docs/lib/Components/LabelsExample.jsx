/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Label } from 'lib/index';

class LabelsExample extends React.Component {
  render() {
    return (
      <div>
        <h3>Labels</h3>
        <hr/>
        <p>Scale to parent</p>
        <h1>Heading <Label>New</Label></h1>
        <h2>Heading <Label>New</Label></h2>
        <h3>Heading <Label>New</Label></h3>
        <h4>Heading <Label>New</Label></h4>
        <h5>Heading <Label>New</Label></h5>
        <h6>Heading <Label>New</Label></h6>
        <p>Variations</p>
        <p>
          <Label>default</Label>
          <Label color="primary">primary</Label>
          <Label color="success">success</Label>
          <Label color="info">info</Label>
          <Label color="warning">warning</Label>
          <Label color="danger">danger</Label>
        </p>
        <p>Pills</p>
        <p>
          <Label color="default" pill>default</Label>
          <Label color="primary" pill>primary</Label>
          <Label color="success" pill>success</Label>
          <Label color="info" pill>info</Label>
          <Label color="warning" pill>warning</Label>
          <Label color="danger" pill>danger</Label>
        </p>
      </div>
    );
  }
}

export default LabelsExample;
