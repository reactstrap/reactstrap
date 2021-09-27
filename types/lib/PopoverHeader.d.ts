import * as React from 'react';
import { CSSModule } from './utils';

export interface PopoverHeaderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class PopoverHeader extends React.Component<PopoverHeaderProps> {}
export default PopoverHeader;
