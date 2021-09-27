import * as React from 'react';
import { CSSModule } from './utils';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  size?: string;
  vertical?: boolean;
}

declare class ButtonGroup extends React.Component<ButtonGroupProps> {}
export default ButtonGroup;
