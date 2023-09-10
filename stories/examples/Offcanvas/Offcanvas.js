import Example from './OffcanvasExample';
// eslint-disable-next-line import/extensions
import OffcanvasExample from '!!raw-loader!./OffcanvasExample';

Example.parameters = {
  docs: {
    source: {
      code: OffcanvasExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  backdrop: true,
  fade: true,
  scrollable: false,
};

Example.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['top', 'start', 'end', 'bottom'],
  },
};

export default Example;
