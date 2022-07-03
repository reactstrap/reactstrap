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

export { default as Carousel } from './examples/Carousel/Carousel';
export { default as CustomTag } from './examples/Carousel/CarouselCustomTag';
export { default as Uncontrolled } from './examples/Carousel/CarouselUncontrolled';
export { default as Props } from './examples/Carousel/CarouselProps';