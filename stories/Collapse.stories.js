export default {
  title: 'Components/Collapse',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Collapse](https://getbootstrap.com/docs/5.1/components/collapse/)
  
  Toggle the visibility of content across your project with Collapse.
  `
      }
    }
  }
};

export { default as Collapse } from './examples/Collapse/Collapse';
export { default as CollapseEvents } from './examples/Collapse/Events';
export { default as CollapseHorizontal } from './examples/Collapse/Horizontal';
export { default as CollapseUncontrolled } from './examples/Collapse/Uncontrolled';
export { default as Props } from './examples/Collapse/Props';