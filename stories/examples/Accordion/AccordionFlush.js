import Example from './AccordionFlushExample';
// eslint-disable-next-line import/extensions
import AccordionCode from '!!raw-loader!./AccordionFlushExample';

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
