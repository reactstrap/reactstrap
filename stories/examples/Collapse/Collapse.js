import Example from './CollapseExample';
// eslint-disable-next-line import/extensions
import CollapseExample from '!!raw-loader!./CollapseExample';

Example.parameters = {
  docs: {
    source: {
      code: CollapseExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  horizontal: false,
};

export default Example;
