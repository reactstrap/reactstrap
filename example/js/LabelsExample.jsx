/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Label } from 'reactstrap';

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
          <Label>default</Label>&nbsp;
          <Label color="primary">primary</Label>&nbsp;
          <Label color="success">success</Label>&nbsp;
          <Label color="info">info</Label>&nbsp;
          <Label color="warning">warning</Label>&nbsp;
          <Label color="danger">danger</Label>
        </p>
        <p>Pills</p>
        <p>
          <Label color="default" pill>default</Label>&nbsp;
          <Label color="primary" pill>primary</Label>&nbsp;
          <Label color="success" pill>success</Label>&nbsp;
          <Label color="info" pill>info</Label>&nbsp;
          <Label color="warning" pill>warning</Label>&nbsp;
          <Label color="danger" pill>danger</Label>
        </p>
      </div>
    );
  }
}

export default LabelsExample;
