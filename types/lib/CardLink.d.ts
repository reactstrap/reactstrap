import * as React from 'react';
import { CSSModule } from './utils';

export interface CardLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  [key: string]: any;
  tag?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLAnchorElement>;
  cssModule?: CSSModule;
}

declare class CardLink extends React.Component<CardLinkProps> {}
export default CardLink;
