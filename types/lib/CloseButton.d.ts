import * as React from 'react';
import { CSSModule } from './utils';

export interface CloseButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: 'white' | 'black';
  cssModule?: CSSModule;
}

declare class CloseButton extends React.Component<CloseButtonProps> {}
export default CloseButton;