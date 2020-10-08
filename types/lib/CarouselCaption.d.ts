import * as React from 'react';
import { CSSModule } from './index';

export interface CarouselCaptionProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  captionHeader?: React.ReactNode;
  captionText: React.ReactNode;
  cssModule?: CSSModule;
}

declare class CarouselCaption extends React.Component<CarouselCaptionProps> {}
export default CarouselCaption;
