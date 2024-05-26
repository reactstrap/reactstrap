import * as React from 'react';
import { CSSModule } from './utils';

export interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  isOpen?: boolean;
  cssModule?: CSSModule;
  tag?: React.ElementType;
  horizontal?: boolean;
  navbar?: boolean;
  delay?: {
    show: number;
    hide: number;
  };
  onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
  onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  onExited?: (node: HTMLElement) => void;
  innerRef?: React.Ref<HTMLElement>;
}

export interface UncontrolledCollapseProps extends CollapseProps {
  defaultOpen?: boolean;
  toggler: string;
  toggleEvents?: string[];
}

declare class Collapse extends React.Component<CollapseProps> {}
export default Collapse;
