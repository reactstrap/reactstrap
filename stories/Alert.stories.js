export default {
  title: 'Components/Alert',
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.1/components/alerts/)

Provide contextual feedback messages for typical user actions.
        `,
      }
    }
  }
};

export { default as Alert } from './examples/Alert';
export { default as AlertContent } from './examples/AlertContent';
export { default as Dismiss } from './examples/AlertDismiss';
export { default as AlertLink } from './examples/AlertLink';
export { default as UncontrolledDismiss } from './examples/AlertUncontrolledDismiss';
export { default as Props } from './examples/AlertProps';