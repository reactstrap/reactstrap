import * as React from 'react';
import { CSSModule } from './utils';

export interface ListGroupItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  cssModule?: CSSModule;
  href?: string;
}

declare class ListGroupItem extends React.Component<ListGroupItemProps> {}
export default ListGroupItem;
