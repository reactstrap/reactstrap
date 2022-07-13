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
      },
    },
  },
};

export { default as ButtonGroup } from './examples/ButtonGroup/ButtonGroup';
export { default as MixedStyles } from './examples/ButtonGroup/MixedStyles';
export { default as CheckboxAndRadio } from './examples/ButtonGroup/Stateful';
export { default as ButtonToolbar } from './examples/ButtonGroup/Toolbar';
export { default as Sizing } from './examples/ButtonGroup/Sizing';
export { default as Nesting } from './examples/ButtonGroup/Nesting';
export { default as Vertical } from './examples/ButtonGroup/Vertical';
export { default as Props } from './examples/ButtonGroup/Props';
