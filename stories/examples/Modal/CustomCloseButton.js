import Example from './CustomCloseButtonExample';
import CustomCloseButton from '!!raw-loader!./CustomCloseButtonExample';

Example.parameters = {
  docs: {
    source: {
      code: CustomCloseButton,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Add a custom close button to the Modal.'
    }
  },
}

export default Example;
