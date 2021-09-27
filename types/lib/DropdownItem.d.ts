import * as React from 'react';
import { CSSModule } from './utils';

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  active?: boolean;
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ElementType;
  header?: boolean;
  cssModule?: CSSModule;
  href?: string;
  toggle?: boolean;
  text?: boolean;
}

declare class DropdownItem extends React.Component<DropdownItemProps> {}
export default DropdownItem;
