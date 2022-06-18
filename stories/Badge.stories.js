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

export { default as Badge } from './examples/Badge/Badge';
export { default as Headings } from './examples/Badge/BadgeHeadings';
export { default as Buttons } from './examples/Badge/BadgeButton'
export { default as BackgroundColors } from './examples/Badge/BadgeVariations';
export { default as Links } from './examples/Badge/BadgeLinks';
export { default as PillBadges } from './examples/Badge/BadgePills';
export { default as Props } from './examples/Badge/BadgeProps';