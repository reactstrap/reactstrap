/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import Example from './ModalExample';
import ModalExample from '!!raw-loader!./ModalExample';

Example.parameters = {
  docs: {
    source: {
      code: ModalExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  fullscreen: false,
  size: undefined,
  backdrop: true,
  fade: true,
  centered: false,
  scrollable: false,
};

Example.argTypes = {
  fullscreen: {
    control: { type: 'select' },
    options: ['', true, 'sm', 'md', 'lg', 'xl'],
  },
  size: {
    control: { type: 'select' },
    options: ['', 'sm', 'lg', 'xl'],
  },
};

export default Example;
