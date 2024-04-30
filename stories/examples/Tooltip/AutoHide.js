import Example from './AutoHideExample';
// eslint-disable-next-line import/extensions
import AutoHide from './AutoHideExample?raw';

Example.parameters = {
  docs: {
    source: {
      code: AutoHide,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Disable `autohide` to allow users to select text inside tooltip',
    },
  },
};

export default Example;
