import * as React from 'react';
import { CSSModule } from './utils';

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  [key: string]: any;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  disabled?: boolean;
  active?: boolean;
  cssModule?: CSSModule;
}

declare class NavLink extends React.Component<NavLinkProps> {}
export default NavLink;
