import * as React from 'react';
import { CSSModule } from './utils';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  light?: boolean;
  dark?: boolean;
  full?: boolean;
  fixed?: string;
  sticky?: string;
  color?: string;
  container?: boolean | 'fluid' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  tag?: React.ElementType;
  cssModule?: CSSModule;
  expand?: boolean | string;
}

declare class Navbar extends React.Component<NavbarProps> {}
export default Navbar;
