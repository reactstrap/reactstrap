import Example from './CarouselCustomTagExample';
import CarouselCustomTagExample from '!!raw-loader!./CarouselCustomTagExample';

Example.parameters = {
  docs: {
    source: {
      code: CarouselCustomTagExample,
      language: 'jsx',
      type: 'auto'
    },
  },
}

export default Example;
