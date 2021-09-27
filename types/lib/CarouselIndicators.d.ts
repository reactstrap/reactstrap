import * as React from 'react';
import { CSSModule } from './utils';

export interface CarouselIndicatorsProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  items: object[];
  activeIndex: number;
  cssModule?: CSSModule;
  onClickHandler: (idx: number) => void;
}

declare class CarouselIndicators extends React.Component<
  CarouselIndicatorsProps
> {}
export default CarouselIndicators;
