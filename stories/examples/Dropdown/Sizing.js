import Example from './SizingExample';
import DropdownSizing from '!!raw-loader!./SizingExample';

Example.parameters = {
  docs: {
    source: {
      code: DropdownSizing,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story:
        'Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.',
    },
  },
};

export default Example;
