import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import Props from '../Props';

const Example = () => (
  <Props
    components={[
      ListGroup,
      ListGroupItem,
      ListGroupItemHeading,
      ListGroupItemText,
    ]}
  />
);

export default Example;
