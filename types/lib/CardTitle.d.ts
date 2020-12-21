import * as React from 'react';
import { CSSModule } from './index';

export interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardTitle extends React.Component<CardTitleProps> {}
export default CardTitle;
