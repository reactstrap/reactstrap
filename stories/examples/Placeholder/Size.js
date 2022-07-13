import React from 'react';
import { Placeholder } from 'reactstrap';

const Example = (args) => {
  return (
    <>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Want your placeholder bigger or smaller Add `size` prop with `lg`, `sm` or `xs`.',
    },
  },
};
