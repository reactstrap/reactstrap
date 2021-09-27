import * as React from 'react';
import { CSSModule } from './utils';

export interface NavbarBrandProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class NavbarBrand extends React.Component<NavbarBrandProps> {}
export default NavbarBrand;
