import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Props from '../Props';

function Example() {
  return <Props components={[Pagination, PaginationItem, PaginationLink]} />;
}

export default Example;
