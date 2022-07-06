import React from 'react';
import { Badge } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light" className="text-dark">Light</Badge>
      <Badge color="dark">Dark</Badge>
    </div>
  );

}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Change `color` prop to quickly change the appearance of a badge. You can add `text-dark` class name to get darker text for light backgrounds.'
    }
  }
}