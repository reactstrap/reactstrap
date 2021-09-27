import * as React from 'react';
import { CSSModule } from './utils';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardSubtitle extends React.Component<CardSubtitleProps> {}
export default CardSubtitle;
