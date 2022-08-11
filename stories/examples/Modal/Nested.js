import Example from './NestedExample';
// eslint-disable-next-line import/extensions
import Nested from '!!raw-loader!./NestedExample';

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
