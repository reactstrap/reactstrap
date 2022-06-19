import Example from './ButtonStatefulExample';
import ButtonStateful from '!!raw-loader!./ButtonStatefulExample';

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Combine button-like checkbox and radio toggle buttons into a seamless looking button group.'
    },
    source: {
      code: ButtonStateful,
      language: 'jsx',
      type: 'auto'
    },
  }
}