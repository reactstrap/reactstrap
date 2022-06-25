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

export { default as Modal } from './examples/Modal';
export { default as Backdrop } from './examples/ModalBackdrop';
export { default as CustomCloseButton } from './examples/ModalCustomCloseButton';
export { default as CustomCloseIcon } from './examples/ModalCustomCloseIcon';
export { default as CustomTimeout } from './examples/ModalCustomTimeout';
export { default as Destructuring } from './examples/ModalDestructuring';
export { default as External } from './examples/ModalExternal';
export { default as Fadeless } from './examples/ModalFadeless';
export { default as FocusAfterClose } from './examples/ModalFocusAfterClose';
export { default as Fullscreen } from './examples/ModalFullscreen';
export { default as Nested } from './examples/ModalNested';
export { default as Props } from './examples/ModalProps';