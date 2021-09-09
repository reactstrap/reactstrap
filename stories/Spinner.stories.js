import React from 'react';

export default {
  title: 'Components/Spinner',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Spinners](https://getbootstrap.com/docs/5.1/components/spinners/)
  
  Indicate the loading state of a component or page with Spinners.
  `
      }
    }
  }
};

export { default as Spinner } from './examples/Spinner';
export { default as SpinnerGrower } from './examples/SpinnerGrower';
export { default as Props } from './examples/SpinnerProps';