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

export { default as Dropdown } from './examples/Dropdown/Dropdown';
export { default as SplitButton } from './examples/Dropdown/DropdownSplit';
export { default as Sizing } from './examples/Dropdown/DropdownSizing';
export { default as DarkDropdown } from './examples/Dropdown/DropdownDark';
export { default as Directions } from './examples/Dropdown/DropdownDirectionKitchen';
export { default as SetActiveFromChild } from './examples/Dropdown/DropdownSetActiveFromChild';

export { default as Container } from './examples/Dropdown/DropdownContainer';
export { default as Uncontrolled } from './examples/Dropdown/DropdownUncontrolled';
export { default as CustomDropdown } from './examples/Dropdown/CustomDropdown';
export { default as Props } from './examples/Dropdown/DropdownProps';