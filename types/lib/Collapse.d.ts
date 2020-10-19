import * as React from 'react';
import { CSSModule } from './index';

export interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  isOpen?: boolean;
  cssModule?: CSSModule;
  tag?: React.ElementType;
  navbar?: boolean;
  delay?: {
    show: number;
    hide: number;
  };
  onOpened?: () => void;
  onClosed?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  innerRef?: React.Ref<HTMLElement>;
}

export interface UncontrolledCollapseProps extends CollapseProps {
  defaultOpen?: boolean;
  toggler: string;
  toggleEvents?: string[];
}

declare class Collapse extends React.Component<CollapseProps> {}
export default Collapse;
