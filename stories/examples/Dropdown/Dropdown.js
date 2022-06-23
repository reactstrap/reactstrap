import Example from "./DropdownExample"
import Dropdown from '!!raw-loader!./DropdownExample.js'

export default Example;

Example.parameters = {
  docs: {
    source: {
      code: Dropdown,
      language: 'jsx',
      type: 'auto'
    },
  },
}

Example.args = {
  dark: false,
  end: false,
  flip: false
}

Example.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['up', 'down', 'start', 'end']
  }
}
