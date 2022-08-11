export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Buttons](https://getbootstrap.com/docs/5.1/components/buttons/)

Custom Buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        `,
      },
    },
  },
};

export { default as Button } from './examples/Button/Button';
export { default as Variants } from './examples/Button/Colors';
export { default as CustomTags } from './examples/Button/Tags';
export { default as Outline } from './examples/Button/Outline';
export { default as Sizes } from './examples/Button/Size';
export { default as Disabled } from './examples/Button/Disabled';
export { default as Props } from './examples/Button/Props';
