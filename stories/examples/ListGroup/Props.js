import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import Props from '../Props';

function Example() {
  return (
    <Props
      components={[
        ListGroup,
        ListGroupItem,
        ListGroupItemHeading,
        ListGroupItemText,
      ]}
    />
  );
}

export default Example;
