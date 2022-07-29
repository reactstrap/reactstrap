import Example from './DropdownExample';
// eslint-disable-next-line import/extensions
import Dropdown from '!!raw-loader!./DropdownExample';

export default Example;

Example.parameters = {
  docs: {
    source: {
      code: Dropdown,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  dark: false,
  end: false,
  flip: false,
};

Example.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['up', 'down', 'start', 'end'],
  },
};
