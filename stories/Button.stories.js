import React from 'react';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Buttons](https://getbootstrap.com/docs/5.1/components/buttons/)

Custom Buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        `,
      }
    }
  }
};

export { default as Button } from './examples/Button/Button';
export { default as Variants } from './examples/Button/ButtonColors';
export { default as CustomTags } from './examples/Button/ButtonTags';
export { default as Outline } from './examples/Button/ButtonOutline';
export { default as Sizes } from './examples/Button/ButtonSize';
export { default as Disabled } from './examples/Button/ButtonDisabled';

// export { default as CheckboxAndRadio } from './examples/Button/ButtonStateful';
// export { default as Close } from './examples/Button/ButtonCloseIcon';
// export { default as ButtonGroup } from './examples/Button/ButtonGroup';
// export { default as ButtonDropdown } from './examples/Button/ButtonDropdown';
// export { default as ButtonDropdownMulti } from './examples/Button/ButtonDropdownMulti';
// export { default as ButtonDropdownMultiSplit } from './examples/Button/ButtonDropdownMultiSplit';
// export { default as ButtonDropdownUncontrolled } from './examples/Button/ButtonDropdownUncontrolled';
// export { default as ButtonToolbar } from './examples/Button/ButtonToolbar';
// export { default as Props } from './examples/Button/ButtonProps';