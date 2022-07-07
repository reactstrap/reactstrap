import Example from "./DismissExample"
import AlertDismiss from '!!raw-loader!./DismissExample.js'

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