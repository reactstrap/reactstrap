import * as React from 'react';
import { CSSModule } from './utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLButtonElement>;
  size?: string;
  cssModule?: CSSModule;
  close?: boolean;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;
