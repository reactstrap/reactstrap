import * as React from 'react';
import { CSSModule } from './index';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type CustomInputType =
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'range';

export interface CustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  [key: string]: any;
  id: string | number;
  type: CustomInputType;
  label?: React.ReactNode;
  inline?: boolean;
  valid?: boolean;
  invalid?: boolean;
  bsSize?: 'lg' | 'sm';
  htmlFor?: string;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class CustomInput extends React.Component<CustomInputProps> {}
export default CustomInput;
