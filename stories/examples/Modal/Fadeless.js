import Example from './FadelessExample';
// eslint-disable-next-line import/extensions
import Fadeless from '!!raw-loader!./FadelessExample';

Example.parameters = {
  docs: {
    source: {
      code: Fadeless,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Disable fade animation with `fade={false}` prop.',
    },
  },
};

export default Example;
