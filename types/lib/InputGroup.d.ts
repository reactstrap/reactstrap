import * as React from 'react';
import { CSSModule } from './utils';

export interface InputGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  size?: string;
  cssModule?: CSSModule;
}

declare class InputGroup extends React.Component<InputGroupProps> {}
export default InputGroup;
