import React from 'react';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Breadcrumb](https://getbootstrap.com/docs/5.1/components/breadcrumb/)

Indicate the current page’s location within a navigational hierarchy that automatically adds separators.
        `,
      }
    }
  }
};

export { default as Breadcrumb } from './examples/Breadcrumb';
export { default as NoList } from './examples/BreadcrumbNoList';
export { default as Props } from './examples/BreadcrumbProps';