export default {
  title: 'Components/Pagination',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Pagination](https://getbootstrap.com/docs/5.1/components/pagination/)
  
  Use Pagination to indicate that a series of related content exists across multiple pages.
  `
      }
    }
  }
};

export { default as Pagination } from './examples/Pagination';
export { default as Large } from './examples/PaginationSizingLarge';
export { default as Small } from './examples/PaginationSizingSmall';
export { default as State } from './examples/PaginationState';
export { default as Props } from './examples/PaginationProps';