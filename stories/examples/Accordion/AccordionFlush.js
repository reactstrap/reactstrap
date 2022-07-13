import Example from './AccordionFlushExample';
import AccordionCode from '!!raw-loader!./AccordionFlushExample.js';

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Add `flush` to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.',
    },
    source: {
      code: AccordionCode,
      language: 'jsx',
      type: 'auto',
    },
  },
};
