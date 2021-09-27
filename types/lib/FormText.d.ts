import * as React from 'react';
import { CSSModule } from './utils';

export interface FormTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  inline?: boolean;
  tag?: React.ElementType;
  color?: string;
  cssModule?: CSSModule;
}

declare class FormText extends React.Component<FormTextProps> {}
export default FormText;
