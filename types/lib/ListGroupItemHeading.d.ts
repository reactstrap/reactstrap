import * as React from 'react';
import { CSSModule } from './utils';

export interface ListGroupItemHeadingProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ListGroupItemHeading extends React.Component<
  ListGroupItemHeadingProps
> {}
export default ListGroupItemHeading;
