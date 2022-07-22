import React from 'react';
import { Badge } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <h1>Example Heading <Badge>New</Badge></h1>
      <h2>Example Heading <Badge>New</Badge></h2>
      <h3>Example Heading <Badge>New</Badge></h3>
      <h4>Example Heading <Badge>New</Badge></h4>
      <h5>Example Heading <Badge>New</Badge></h5>
      <h6>Example Heading <Badge>New</Badge></h6>
    </>
  )
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Badges scale to match the size of the immediate parent element by using relative font sizing and em units. '
    }
  }
}