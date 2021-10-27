import * as React from 'react';
import { CSSModule } from './utils';

export interface CardDeckProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardDeck extends React.Component<CardDeckProps> {}
export default CardDeck;
