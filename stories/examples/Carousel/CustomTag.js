import Example from './CustomTagExample';
// eslint-disable-next-line import/extensions
import CarouselCustomTagExample from '!!raw-loader!./CustomTagExample';

Example.parameters = {
  docs: {
    source: {
      code: CarouselCustomTagExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

export default Example;
