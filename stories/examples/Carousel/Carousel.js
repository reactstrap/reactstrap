import Example from './CarouselExample';
// eslint-disable-next-line import/extensions
import CarouselExample from '!!raw-loader!./CarouselExample';

Example.args = {
  dark: false,
  slide: true,
  fade: false,
};

Example.parameters = {
  docs: {
    source: {
      code: CarouselExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

export default Example;
