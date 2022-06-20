import Example from './CollapseEventsExample';
import CollapseEvents from '!!raw-loader!./CollapseEventsExample';

Example.parameters = {
  docs: {
    source: {
      code: CollapseEvents,
      language: 'jsx',
      type: 'auto'
    },
    description: {
      story: 'Track events as they happen.'
    }
  },
}

export default Example;
