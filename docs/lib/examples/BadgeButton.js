import React from 'react';
import { Badge, Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    );
  }
}
