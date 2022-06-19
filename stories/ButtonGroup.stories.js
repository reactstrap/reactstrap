import React from 'react';

export default {
  title: 'Components/ButtonGroup',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Buttons](https://getbootstrap.com/docs/5.1/components/buttons/)

Group a series of buttons together on a single line or stack them in a vertical column.
        `,
      }
    }
  }
};

export { default as ButtonGroup } from './examples/ButtonGroup/ButtonGroup';
export { default as MixedStyles } from './examples/ButtonGroup/ButtonMixedStyles';
export { default as CheckboxAndRadio } from './examples/ButtonGroup/ButtonStateful';
export { default as ButtonToolbar } from './examples/ButtonGroup/ButtonToolbar';
export { default as Sizing } from './examples/ButtonGroup/ButtonGroupSizing';
export { default as Nesting } from './examples/ButtonGroup/ButtonGroupNesting';
export { default as Vertical } from './examples/ButtonGroup/ButtonGroupVertical';
export { default as Props } from './examples/ButtonGroup/ButtonGroupProps';