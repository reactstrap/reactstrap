import Example from './TabsExample';
import TabsExample from '!!raw-loader!./TabsExample';

Example.parameters = {
  docs: {
    description: {
      story: 'Takes the basic Nav from above and adds the `tabs` prop to generate a tabbed interface.'
    },
    source: {
      code: TabsExample,
      language: 'jsx',
      type: 'auto'
    },
  }
}

export default Example;