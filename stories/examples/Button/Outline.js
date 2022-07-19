import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
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

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'In need of a button, but not the hefty background colors they bring? Add `outline` prop to remove all background images and colors on any button.'
    }
  }
}