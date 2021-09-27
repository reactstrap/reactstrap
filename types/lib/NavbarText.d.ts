import * as React from 'react';
import { CSSModule } from './utils';

export interface NavbarTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class NavbarText extends React.Component<NavbarTextProps> {}
export default NavbarText;
