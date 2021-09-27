import * as React from 'react';
import { CSSModule } from './utils';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardHeader extends React.Component<CardHeaderProps> {}
export default CardHeader;
