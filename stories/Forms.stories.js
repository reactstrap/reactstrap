import React from 'react';

export default {
  title: 'Components/Forms',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Forms](https://getbootstrap.com/docs/5.1/forms/overview/)

  Form controls, layout options, and custom components for creating a wide variety of forms.
  `
      }
    }
  }
};

export { default as Input } from './examples/Input';
export { default as Form } from './examples/Form';
export { default as FormFeedback } from './examples/FormFeedback';
export { default as FormGrid } from './examples/FormGrid';
export { default as FormGridFormRow } from './examples/FormGridFormRow';
export { default as FormInline } from './examples/FormInline';
export { default as LabelHidden } from './examples/LabelHidden';
export { default as InlineCheckboxes } from './examples/InlineCheckboxes';
export { default as InputGridSizing } from './examples/InputGridSizing';
export { default as InputSizing } from './examples/InputSizing';
export { default as InputType } from './examples/InputType';
export { default as Props } from './examples/FormProps';