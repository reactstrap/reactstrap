export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Accordion](https://getbootstrap.com/docs/5.1/components/accordion/)

Used to build vertically collapsing accordions.
        `,
      },
    },
  },
};

export { default as Accordion } from './examples/Accordion/Accordion';
export { default as Flush } from './examples/Accordion/AccordionFlush';
export { default as Uncontrolled } from './examples/Accordion/AccordionUncontrolled';
export { default as StayOpen } from './examples/Accordion/AccordionStayOpen';
export { default as Props } from './examples/Accordion/AccordionProps';
