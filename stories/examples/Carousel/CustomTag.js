import Example from './CustomTagExample';
// eslint-disable-next-line import/extensions
import CarouselCustomTagExample from './CustomTagExample?raw';

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
