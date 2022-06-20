import React from 'react';

export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Card](https://getbootstrap.com/docs/5.1/components/card/)

Cards provide a flexible and extensible content container with multiple variants and options.
        `,
      }
    }
  }
};

export { default as Card } from './examples/Card/Card';
export { default as ContentTypes } from './examples/Card/CardContentTypes';
export { default as ListGroups } from './examples/Card/CardListGroup';
export { default as KitchenSink } from './examples/Card/CardKitchenSInk';
export { default as HeadersAndFooters } from './examples/Card/CardHeaderFooter';
export { default as Sizing } from './examples/Card/CardSizing';
export { default as TextAlignment } from './examples/Card/CardAlignment';
export { default as ImageCaps } from './examples/Card/CardImageCaps';
export { default as ImageOverlay } from './examples/Card/CardImageOverlay';
export { default as Backgrounds } from './examples/Card/CardBackgrounds';
export { default as Border } from './examples/Card/CardOutline';
export { default as CardGroups } from './examples/Card/CardGroups';
export { default as CardColumns } from './examples/Card/CardColumns';
export { default as Props } from './examples/Card/CardProps';