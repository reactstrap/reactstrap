import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Example(props) {
  return (
    <Pagination size="lg" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#">
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#">
          Previous
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          Next
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#">
          Last
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Fancy a larger pagination? Add `size="lg"` prop.',
    },
  },
};
