import Example from './DestructuringExample';
import Destructuring from '!!raw-loader!./DestructuringExample';

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
