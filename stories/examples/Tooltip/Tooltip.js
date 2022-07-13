/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import Example from './TooltipExample';
import TooltipExample from '!!raw-loader!./TooltipExample';

Example.parameters = {
  docs: {
    source: {
      code: TooltipExample,
      language: 'jsx',
      type: 'auto',
    },
  },
};

Example.args = {
  autohide: true,
  flip: true,
};

Example.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Example;
