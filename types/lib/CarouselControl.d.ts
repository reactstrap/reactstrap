import * as React from 'react';
import { CSSModule } from './utils';

export interface CarouselControlProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  direction: 'prev' | 'next';
  onClickHandler: () => void;
  cssModule?: CSSModule;
  directionText?: string;
}

export default class CarouselControl extends React.Component<
  CarouselControlProps
> {}
