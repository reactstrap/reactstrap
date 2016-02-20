/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button } from 'lib/index';

const Link = (props) => <a {...props}>{props.children}</a>;

class ButtonsExample extends React.Component {
  render() {
    return (
      <div>
        <h3>Buttons</h3>
        <hr/>
        <p>
          <Button color="primary">primary</Button>&nbsp;
          <Button color="secondary">secondary</Button>&nbsp;
          <Button color="success">success</Button>&nbsp;
          <Button color="info">info</Button>&nbsp;
          <Button color="warning">warning</Button>&nbsp;
          <Button color="danger">danger</Button>
          <Button color="link">link</Button>
        </p>
        <p>
          <Button color="primary-outline">primary-outline</Button>&nbsp;
          <Button color="secondary-outline">secondary-outline</Button>&nbsp;
          <Button color="success-outline">success-outline</Button>&nbsp;
          <Button color="info-outline">info-outline</Button>&nbsp;
          <Button color="warning-outline">warning-outline</Button>&nbsp;
          <Button color="danger-outline">danger-outline</Button>
        </p>
        <p><Button El={Link} href="https://github.com" target="_blank" color="link">Custom Element (Link)</Button></p>
        <p>Active state</p>
        <p><Button active>active</Button></p>
        <p>Disabeld state</p>
        <p><Button disabled>disabled</Button></p>
        <p>Sizes</p>
        <p>
          <Button size="sm">Small (sm)</Button>
        </p>
        <p>
          <Button size="lg">Large (lg)</Button>
        </p>
      </div>
    );
  }
}

export default ButtonsExample;
