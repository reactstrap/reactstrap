import * as React from 'react';
import { CSSModule } from './utils';

export interface CardColumnsProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardColumns extends React.Component<CardColumnsProps> {}
export default CardColumns;
