import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <p>The <code>horizontal</code> prop can be a Boolean or a string specifying one of Bootstrap's breakpoints</p>
      <ListGroup horizontal>
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p className="mt-3">This list group is horizontal at the <code>lg</code> breakpoint and up.</p>
      <ListGroup horizontal="lg">
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p className="mt-3">Note that horizontal list groups cannot be combined with flush list groups. If <code>flush</code> is <code>true</code> then <code>horizontal</code> has no effect.</p>
    </div>
  );
}

Example.parameters = {
  docs: {
    description: {
      story: 'Add `horizontal` prop to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively choose a variant `sm|md|lg|xl|xxl` to make a list group horizontal starting at that breakpoint’s min-width.'
    }
  }
}

export default Example;
