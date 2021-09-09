import React from 'react';

export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Accordion](https://getbootstrap.com/docs/5.1/components/accordion/)

Used to build vertically collapsing accordions.
        `,
      }
    }
  }
};

export { default as Accordion } from './examples/Accordion';
export { default as Flush } from './examples/AccordionFlush';
export { default as Uncontrolled } from './examples/UncontrolledAccordion';
export { default as StayOpen } from './examples/UncontrolledAccordionStayOpen';
export { default as Props } from './examples/AccordionProps';