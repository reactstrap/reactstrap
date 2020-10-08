import * as React from 'react';
import { CSSModule } from './index';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class CardBody extends React.Component<CardBodyProps> {}
export default CardBody;
