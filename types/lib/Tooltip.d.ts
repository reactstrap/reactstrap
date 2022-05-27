import * as React from 'react';
import type { Modifier, Placement } from '@popperjs/core';
import { CSSModule } from './utils';

export type TooltipChildren = React.ReactNode;

export interface UncontrolledTooltipProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  target: string | HTMLElement | React.RefObject<HTMLElement>;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  delay?: number | { show: number; hide: number };
  popperClassName?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Placement;
  modifiers?: Modifier<string, any>[];
  strategy?: string;
  cssModule?: CSSModule;
  fade?: boolean;
  flip?: boolean;
  children?: TooltipChildren;
}

export interface TooltipProps extends UncontrolledTooltipProps {
  toggle?: React.MouseEventHandler<any> | (() => void);
  isOpen?: boolean;
}

declare class Tooltip extends React.Component<TooltipProps> {}
export default Tooltip;
