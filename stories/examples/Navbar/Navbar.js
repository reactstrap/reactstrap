import Example from './NavbarExample';
// eslint-disable-next-line import/extensions
import NavbarExample from '!!raw-loader!./NavbarExample';
import { colors } from '../options';

Example.parameters = {
  docs: {
    source: {
      code: NavbarExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  color: 'light',
  light: true,
  dark: false,
  full: false,
  expand: 'md',
  container: 'fluid',
};

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors,
  },
  container: {
    control: { type: 'select' },
    options: [false, true, 'sm', 'md', 'lg', 'xl', 'fluid'],
  },
  expand: {
    control: { type: 'select' },
    options: [false, true, 'sm', 'md', 'lg', 'xl'],
  },
  fixed: {
    control: { type: 'select' },
    options: ['', 'top', 'bottom'],
  },
};

export default Example;
