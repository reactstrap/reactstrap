export default {
  title: 'Components/Dropdown',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Dropdowns](https://getbootstrap.com/docs/5.1/components/dropdowns/)
  
  Toggle contextual overlays for displaying lists of links and more with Dropdowns.
  `
      }
    }
  }
};

export { default as Dropdown } from './examples/Dropdown';
export { default as Container } from './examples/DropdownContainer';
export { default as SetActiveFromChild } from './examples/DropdownSetActiveFromChild';
export { default as Sizing } from './examples/DropdownSizing';
export { default as Uncontrolled } from './examples/DropdownUncontrolled';
export { default as CustomDropdown } from './examples/CustomDropdown';
export { default as Props } from './examples/DropdownProps';