import Example from './CustomTimeoutExample';
// eslint-disable-next-line import/extensions
import CustomTimeout from '!!raw-loader!./CustomTimeoutExample';

Example.parameters = {
  docs: {
    source: {
      code: CustomTimeout,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Add a custom timeout to the Modal.',
    },
  },
};

export default Example;
