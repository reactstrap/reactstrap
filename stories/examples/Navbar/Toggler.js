import Example from './TogglerExample';
import TogglerExample from '!!raw-loader!./TogglerExample';

Example.parameters = {
  docs: {
    description: {
      story:
        'Navbar togglers help toggle navbar in case there is not enough space.',
    },
    source: {
      code: TogglerExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

export default Example;
