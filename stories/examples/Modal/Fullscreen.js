import Example from './FullscreenExample';
import Fullscreen from '!!raw-loader!./FullscreenExample';

Example.parameters = {
  docs: {
    source: {
      code: Fullscreen,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Make the modal fullscreen.'
    }
  },
}

export default Example;
