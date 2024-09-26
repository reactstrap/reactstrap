import Example from './NestedExample';
// eslint-disable-next-line import/extensions
import Nested from './NestedExample?raw';

Example.parameters = {
  docs: {
    source: {
      code: Nested,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Nest modals by putting a modal inside another.',
    },
  },
};

export default Example;
