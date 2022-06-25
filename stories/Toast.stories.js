export default {
  title: 'Components/Toast',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Toasts](https://getbootstrap.com/docs/5.1/components/toasts/)
  
  Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message.
  `
      }
    }
  }
};

export { default as Toast } from './examples/Toast';
export { default as ToastDismiss } from './examples/ToastDismiss';
export { default as ToastHeaderIcon } from './examples/ToastHeaderIcon';
export { default as Props } from './examples/ToastProps';