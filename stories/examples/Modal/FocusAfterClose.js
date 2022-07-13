import Example from './FocusAfterCloseExample';
import FocusAfterClose from '!!raw-loader!./FocusAfterCloseExample';

Example.parameters = {
  docs: {
    source: {
      code: FocusAfterClose,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story:
        'The "Open" button will be focused after close when `returnFocusAfterClose` is true and will not be focused if `returnFocusAfterClose` is false.',
    },
  },
};

export default Example;
