import * as React from 'react';
import type { Modifier } from '@popperjs/core';
import { CSSModule } from './utils';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  dark?: boolean;
  right?: boolean;
  flip?: boolean;
  modifiers?: Modifier<string, any>[];
  cssModule?: CSSModule;
  persist?: boolean;
  strategy?: string;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  updateOnSelect?: boolean;
}

declare class DropdownMenu extends React.Component<DropdownMenuProps> {}
export default DropdownMenu;
