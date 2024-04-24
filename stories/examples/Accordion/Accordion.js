import Example from './AccordionExample';
// eslint-disable-next-line import/extensions
import AccordionCode from './AccordionExample?raw';

export default Example;

Example.parameters = {
  docs: {
    source: {
      code: AccordionCode,
      language: 'jsx',
      type: 'auto',
    },
  },
};
