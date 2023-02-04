import * as React from 'react';
import { CSSModule } from './utils';
import { FadeProps } from './Fade';

export type Direction = 'start' | 'end' | 'bottom' | 'top';

export interface OffcanvasProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  autoFocus?: boolean;
  backdrop?: boolean | 'static';
  backdropClassName?: string;
  backdropTransition?: FadeProps;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  contentClassName?: string;
  cssModule?: CSSModule;
  fade?: boolean;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  keyboard?: boolean;
  labelledBy?: string;
  offcanvasClassName?: string;
  offcanvasTransition?: FadeProps;
  onClosed?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onOpened?: () => void;
  direction?: Direction;
  returnFocusAfterClose?: boolean;
  scrollable?: boolean;
  toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>;
  trapFocus?: boolean;
  unmountOnClose?: boolean;
  wrapClassName?: string;
  zIndex?: number | string;
}

declare class Offcanvas extends React.Component<OffcanvasProps> {}
export default Offcanvas;
