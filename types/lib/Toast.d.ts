import * as React from 'react';
import { CSSModule } from './utils';
import { FadeProps } from './Fade';

export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
  isOpen?: boolean;
  fade?: boolean;
  transition?: FadeProps;
}

declare class Toast extends React.Component<ToastProps> {}
export default Toast;
