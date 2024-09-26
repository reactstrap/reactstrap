import Example from './DestructuringExample';
// eslint-disable-next-line import/extensions
import Destructuring from './DestructuringExample?raw';

Example.parameters = {
  docs: {
    source: {
      code: Destructuring,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Unmount modal on closing using the `unmountOnClose` prop.',
    },
  },
};

export default Example;
