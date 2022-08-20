import * as React from 'react';
import { CSSModule } from './utils';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  [key: string]: any;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLFormElement>;
  cssModule?: CSSModule;
}

declare class Form extends React.Component<FormProps> {}
export default Form;
