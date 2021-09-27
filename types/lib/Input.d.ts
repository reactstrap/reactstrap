import * as React from 'react';
import { CSSModule } from './utils';

export type InputType =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  type?: InputType;
  bsSize?: 'lg' | 'sm';
  valid?: boolean;
  invalid?: boolean;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  plaintext?: boolean;
  addon?: boolean;
  cssModule?: CSSModule;
}

declare class Input extends React.Component<InputProps> {}
export default Input;
