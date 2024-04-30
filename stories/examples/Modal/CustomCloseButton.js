import Example from './CustomCloseButtonExample';
// eslint-disable-next-line import/extensions
import CustomCloseButton from './CustomCloseButtonExample?raw';

Example.parameters = {
  docs: {
    source: {
      code: CustomCloseButton,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Add a custom close button to the Modal.',
    },
  },
};

export default Example;
