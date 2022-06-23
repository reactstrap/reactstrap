import Example from './DropdownSizingExample';
import DropdownSizing from '!!raw-loader!./DropdownSizingExample';

Example.parameters = {
  docs: {
    source: {
      code: DropdownSizing,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.'
    }
  },
}

export default Example;
