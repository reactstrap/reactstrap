import * as React from 'react';
import { CSSModule } from './index';

export interface ToastBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class ToastBody extends React.Component<ToastBodyProps> {}
export default ToastBody;
