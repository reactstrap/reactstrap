import Example from './DismissExample';
// eslint-disable-next-line import/extensions
import AlertDismiss from './DismissExample?raw';

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Alerts can also be dismissed.',
    },
    source: {
      code: Example,
      language: 'jsx',
      type: 'auto',
    },
  },
};
