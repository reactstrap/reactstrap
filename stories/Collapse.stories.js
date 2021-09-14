import React from 'react';

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

export { default as Collapse } from './examples/Collapse';
export { default as CollapseEvents } from './examples/CollapseEvents';
export { default as CollapseHorizontal } from './examples/CollapseHorizontal';
export { default as CollapseUncontrolled } from './examples/CollapseUncontrolled';
export { default as Props } from './examples/CollapseProps';