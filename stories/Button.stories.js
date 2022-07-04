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

export { default as Button } from './examples/Button';
export { default as Outline } from './examples/ButtonOutline';
export { default as CheckboxAndRadio } from './examples/ButtonStateful';
export { default as Close } from './examples/ButtonCloseIcon';
export { default as ButtonGroup } from './examples/ButtonGroup';
export { default as ButtonDropdown } from './examples/ButtonDropdown';
export { default as ButtonDropdownMulti } from './examples/ButtonDropdownMulti';
export { default as ButtonDropdownMultiSplit } from './examples/ButtonDropdownMultiSplit';
export { default as ButtonDropdownUncontrolled } from './examples/ButtonDropdownUncontrolled';
export { default as ButtonToolbar } from './examples/ButtonToolbar';
export { default as Props } from './examples/ButtonProps';