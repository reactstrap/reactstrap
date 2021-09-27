import * as React from 'react';
import { CSSModule } from './utils';

export interface CardImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  [key: string]: any;
  tag?: React.ElementType;
  top?: boolean;
  bottom?: boolean;
  cssModule?: CSSModule;
}

declare class CardImg extends React.Component<CardImgProps> {}
export default CardImg;
