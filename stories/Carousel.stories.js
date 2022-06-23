export default {
  title: 'Components/Carousel',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Carousel](https://getbootstrap.com/docs/5.1/components/carousel/)
  
  A slideshow component for cycling through elements, images, or slides of text — like a carousel.
        `,
      }
    }
  }
};

export { default as Carousel } from './examples/Carousel';
export { default as CustomTag } from './examples/CarouselCustomTag';
export { default as Uncontrolled } from './examples/CarouselUncontrolled';
export { default as Props } from './examples/CarouselProps';