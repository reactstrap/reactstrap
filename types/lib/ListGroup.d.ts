import * as React from 'react';
import { CSSModule } from './utils';

export interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  flush?: boolean;
  horizontal?: boolean | string;
  numbered?: boolean;
  cssModule?: CSSModule;
}

declare class ListGroup extends React.Component<ListGroupProps> {}
export default ListGroup;
