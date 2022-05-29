import React from 'react';

export default {
  title: 'Components/CloseButton',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap CloseButton](https://getbootstrap.com/docs/5.2/components/close-button/)
  
  A generic close button for dismissing content like modals and alerts.
        `,
      }
    }
  }
};

export { default as CloseButton } from './examples/CloseButton';
export { default as CloseButtonWhite } from './examples/CloseButtonWhite';
export { default as Props } from './examples/CloseButtonProps';