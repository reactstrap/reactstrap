import * as React from 'react';
import { CSSModule } from './utils';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  active?: boolean;
  cssModule?: CSSModule;
}

declare class NavItem extends React.Component<NavItemProps> {}
export default NavItem;
