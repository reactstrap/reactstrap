import React from 'react';
import { List } from 'reactstrap';

const Example = (props) => {
  return (
    <List type="unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </List>
  );
}

Example.parameters = {
  docs: {
    description: {
      story: 'Remove the default `list-style` and `left margin` on list items (immediate children only).'
    }
  }
}

export default Example;
