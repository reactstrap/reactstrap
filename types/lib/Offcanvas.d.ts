import * as React from 'react';
import { CSSModule } from './index';
import { FadeProps } from './Fade';

export type Placement = 'start' | 'end' | 'left' | 'right' | 'bottom' | 'top';

export interface OffcanvasProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  isOpen?: boolean;
  autoFocus?: boolean;
  toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>;
  keyboard?: boolean;
  backdrop?: boolean | 'static';
  placement?: Placement;
  scrollable?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  cssModule?: CSSModule;
  wrapClassName?: string;
  offcanvasClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  zIndex?: number | string;
  fade?: boolean;
  backdropTransition?: FadeProps;
  offcanvasTransition?: FadeProps;
  labelledBy?: string;
  unmountOnClose?: boolean;
  returnFocusAfterClose?: boolean;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
  trapFocus?: boolean;
}

declare class Offcanvas extends React.Component<OffcanvasProps> {}
export default Offcanvas;
