import * as React from 'react';
import { CSSModule } from './utils';

export interface PaginationItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  cssModule?: CSSModule;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ElementType;
}

declare class PaginationItem extends React.Component<PaginationItemProps> {}
export default PaginationItem;
