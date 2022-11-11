import * as React from 'react';
import { CSSModule } from './utils';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
}

declare class CardBody extends React.Component<CardBodyProps> {}
export default CardBody;
