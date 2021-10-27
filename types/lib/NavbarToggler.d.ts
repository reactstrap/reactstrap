import * as React from 'react';
import { CSSModule } from './utils';

export interface NavbarTogglerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class NavbarToggler extends React.Component<NavbarTogglerProps> {}
export default NavbarToggler;
