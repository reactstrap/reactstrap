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
export { default as Colors } from './examples/SpinnerColors'
export { default as GrowingSpinner } from './examples/SpinnerGrower';
export { default as Alignment } from './examples/SpinnerAlignment';
export { default as Size } from './examples/SpinnerSize';
export { default as CustomSize } from './examples/SpinnerCustomSize';
export { default as Buttons } from './examples/SpinnerButton';
export { default as Props } from './examples/SpinnerProps';