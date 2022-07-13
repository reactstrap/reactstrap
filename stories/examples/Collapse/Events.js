import Example from './EventsExample';
import CollapseEvents from '!!raw-loader!./EventsExample';

Example.parameters = {
  docs: {
    source: {
      code: CollapseEvents,
      language: 'jsx',
      type: 'auto',
    },
    description: {
      story: 'Track events as they happen.',
    },
  },
};

export default Example;
