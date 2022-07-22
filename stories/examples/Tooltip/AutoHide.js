import Example from './AutoHideExample';
import AutoHide from '!!raw-loader!./AutoHideExample';

Example.parameters = {
  docs: {
    source: {
      code: AutoHide,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Disable `autohide` to allow users to select text inside tooltip'
    }
  },
}

export default Example;
