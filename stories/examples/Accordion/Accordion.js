
import Example from "./AccordionExample"
import AccordionCode from '!!raw-loader!./AccordionExample.js'

export default Example;

Example.parameters = {
  docs: {
    source: {
      code: AccordionCode,
      language: 'jsx',
      type: 'auto'
    }
  },
}