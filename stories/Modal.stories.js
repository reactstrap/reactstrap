export default {
  title: 'Components/Modal',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Modal](https://getbootstrap.com/docs/5.1/components/modal/)
  
  Add dialogs to your site for lightboxes, user notifications, or completely custom content.
  `
      }
    }
  }
};

export { default as Modal } from './examples/Modal/Modal.js';
export { default as Backdrop } from './examples/Modal/Backdrop';
export { default as CustomCloseButton } from './examples/Modal/CustomCloseButton';
export { default as CustomTimeout } from './examples/Modal/CustomTimeout';
export { default as Destructuring } from './examples/Modal/Destructuring';
export { default as External } from './examples/Modal/External';
export { default as Fadeless } from './examples/Modal/Fadeless';
export { default as FocusAfterClose } from './examples/Modal/FocusAfterClose';
export { default as Fullscreen } from './examples/Modal/Fullscreen';
export { default as Nested } from './examples/Modal/Nested';
export { default as Props } from './examples/Modal/Props';