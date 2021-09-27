import * as React from 'react';
import { CSSModule } from './utils';

export interface DropdownToggleProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  caret?: boolean;
  color?: string;
  cssModule?: CSSModule;
  disabled?: boolean;
  outline?: boolean;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  tag?: React.ElementType;
  nav?: boolean;
  size?: string;
}

declare class DropdownToggle extends React.Component<DropdownToggleProps> {}
export default DropdownToggle;
