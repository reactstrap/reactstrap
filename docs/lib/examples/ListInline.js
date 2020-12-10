import React from 'react';
import { List, ListInlineItem } from 'reactstrap';

const Example = (props) => {
  return (
    <List type="inline">
      <ListInlineItem>Lorem ipsum</ListInlineItem>
      <ListInlineItem>Phasellus iaculis</ListInlineItem>
      <ListInlineItem>Nulla volutpat</ListInlineItem>
    </List>
  );
}

export default Example;
