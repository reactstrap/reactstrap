import React from 'react';
import { Form, Input } from 'reactstrap';

export default () => {
  return (
    <Form>
      <Input
        id="algolia-doc-search"
        placeholder="Search docs"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </Form>
  );
};
