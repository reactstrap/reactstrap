import Example from './BackdropExample';
import BackdropExample from '!!raw-loader!./BackdropExample';

Example.parameters = {
  docs: {
    description: {
      story: 'When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.'
    },
    source: {
      code: BackdropExample,
      language: 'jsx',
      type: 'auto'
    },
  }
}

export default Example;