import * as React from 'react';
import { CSSModule } from './utils';

export interface ButtonToolbarProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ButtonToolbar extends React.Component<ButtonToolbarProps> {}
export default ButtonToolbar;
