import Example from "./AlertDismissExample"
import AlertDismiss from '!!raw-loader!./AlertDismissExample.js'

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Alerts can also be dismissed.'
    },
    source: {
      code: AlertDismiss,
      language: 'jsx',
      type: 'auto'
    },
  },
}