import * as React from 'react';
import { CSSModule } from './utils';

export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardFooter extends React.Component<CardFooterProps> {}
export default CardFooter;
