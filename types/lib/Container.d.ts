import * as React from 'react';
import { CSSModule } from './utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  fluid?: boolean | string;
  cssModule?: CSSModule;
}

declare class Container extends React.Component<ContainerProps> {}
export default Container;
