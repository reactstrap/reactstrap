export default {
  title: 'Components/InputGroup',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap InputGroup](https://getbootstrap.com/docs/5.1/forms/input-group/)
  
  Extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.
  `
      }
    }
  }
};

export { default as InputGroup } from './examples/InputGroupOverview';
export { default as InputGroupAddon } from './examples/InputGroupAddon';
export { default as InputGroupButton } from './examples/InputGroupButton';
export { default as InputGroupButtonShorthand } from './examples/InputGroupButtonShorthand';
export { default as Sizing } from './examples/InputGroupSizing';
export { default as Props } from './examples/InputGroupProps';