import * as React from 'react';
import { CSSModule } from './utils';

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class InputGroupText extends React.Component<InputGroupTextProps> {}
export default InputGroupText;
