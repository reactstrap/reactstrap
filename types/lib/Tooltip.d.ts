import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from './index';

interface TooltipChildrenRenderProps {
  update: () => void;
}

export type TooltipChildren =
  | ((props: TooltipChildrenRenderProps) => React.ReactNode)
  | React.ReactNode;

export interface UncontrolledTooltipProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  target: string | HTMLElement | React.RefObject<HTMLElement>;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  delay?: number | { show: number; hide: number };
  popperClassName?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Popper.Placement;
  modifiers?: Popper.Modifiers;
  positionFixed?: boolean;
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
