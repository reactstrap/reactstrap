import Example from './ExternalExample';
// eslint-disable-next-line import/extensions
import External from '!!raw-loader!./ExternalExample';

Example.parameters = {
  docs: {
    source: {
      code: External,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story:
        'Move the close button to the outside of the `Modal` using `external` prop.',
    },
  },
};

export default Example;
