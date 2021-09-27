import * as React from 'react';
import { CSSModule } from './utils';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  inverse?: boolean;
  color?: string;
  body?: boolean;
  outline?: boolean;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class Card extends React.Component<CardProps> {}
export default Card;
