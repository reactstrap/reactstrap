import Example from './StatefulExample';
// eslint-disable-next-line import/extensions
import ButtonStateful from '!!raw-loader!./StatefulExample';

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'Combine button-like checkbox and radio toggle buttons into a seamless looking button group.',
    },
    source: {
      code: ButtonStateful,
      language: 'jsx',
      type: 'auto',
    },
  },
};
