import * as React from 'react';
import { CSSModule } from './utils';

export interface CardGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardGroup extends React.Component<CardGroupProps> {}
export default CardGroup;
