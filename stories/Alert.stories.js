import React from 'react';

export default {
  title: 'Components/Alert',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.1/components/alerts/)

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
        `,
      }
    }
  }
};

export { default as Alert } from './examples/Alert/Alert';
export { default as Colors } from './examples/Alert/AlertColors';
export { default as Content } from './examples/Alert/AlertContent';
export { default as AlertLink } from './examples/Alert/AlertLink';
export { default as Dismiss } from './examples/Alert/AlertDismiss';
export { default as UncontrolledDismiss } from './examples/Alert/AlertUncontrolledDismiss';
export { default as Props } from './examples/Alert/AlertProps';