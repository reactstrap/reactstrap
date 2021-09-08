import React from 'react';

export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Badge](https://getbootstrap.com/docs/5.1/components/badge/)

A small count and labeling component.
        `,
      }
    }
  }
};

export { default as Button } from './examples/BadgeButton';
export { default as Links } from './examples/BadgeLinks';
export { default as Pills } from './examples/BadgePills';
export { default as Sizing } from './examples/Badge';
export { default as Variations } from './examples/BadgeVariations';