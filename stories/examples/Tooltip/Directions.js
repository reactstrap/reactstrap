import Example from './DirectionsExample';
import Directions from '!!raw-loader!./DirectionsExample';

Example.parameters = {
  docs: {
    source: {
      code: Directions,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.'
    }
  },
}

export default Example;
