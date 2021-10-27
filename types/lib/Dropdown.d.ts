import * as React from 'react';
import { CSSModule } from './index';

export type Direction = 'up' | 'down' | 'start' | 'end';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  a11y?: boolean;
  disabled?: boolean;
  direction?: Direction;
  group?: boolean;
  isOpen?: boolean;
  nav?: boolean;
  active?: boolean;
  addonType?: boolean | 'prepend' | 'append';
  size?: string;
  tag?: React.ElementType;
  toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>;
  cssModule?: CSSModule;
  inNavbar?: boolean;
  setActiveFromChild?: boolean;
  menuRole?: boolean | string;
}

export interface UncontrolledDropdownProps extends DropdownProps {
  defaultOpen?: boolean;
  onToggle?: (
    event: React.KeyboardEvent | React.MouseEvent,
    isOpen: boolean
  ) => void;
}

declare class Dropdown extends React.Component<DropdownProps> {}

export default Dropdown;
