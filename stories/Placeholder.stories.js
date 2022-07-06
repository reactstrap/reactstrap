export default {
  title: 'Components/Placeholder',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Placeholder](https://getbootstrap.com/docs/5.2/components/placeholders/)

  Use loading placeholders for your components or pages to indicate something may still be loading.   
        `
      }
    }
  }
}

export { default as Placeholder } from './examples/Placeholder';
export { default as Color } from './examples/PlaceholderColor';
export { default as Sizing } from './examples/PlaceholderSize';
export { default as Animation } from './examples/PlaceholderAnimation';
export { default as Props } from './examples/PlaceholderProps';