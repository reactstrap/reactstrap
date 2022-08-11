import Example from './DismissExample';
// eslint-disable-next-line import/extensions
import AlertDismiss from '!!raw-loader!./DismissExample';

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Alerts can also be dismissed.',
    },
    source: {
      code: AlertDismiss,
      language: 'jsx',
      type: 'auto',
    },
  },
};
