import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Props from '../Props';

const Example = () => (
  <Props
    components={[
      Carousel,
      CarouselItem,
      CarouselControl,
      CarouselIndicators,
      CarouselCaption,
    ]}
  />
);

export default Example;
