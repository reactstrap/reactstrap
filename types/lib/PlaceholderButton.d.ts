import * as React from 'react';
import { CSSModule } from './index';

export interface PlaceholderButtonProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  size?: string;
  color?: string;
  outline?: boolean;
  cssModule?: CSSModule;
  tag?: React.ElementType;
}

declare class PlaceholderButton extends React.Component<PlaceholderButtonProps> {}
export default PlaceholderButton;