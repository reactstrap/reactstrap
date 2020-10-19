import * as React from 'react';
import { CSSModule } from './index';

export interface CardTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardText extends React.Component<CardTextProps> {}
export default CardText;
