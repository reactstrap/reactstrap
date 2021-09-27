import * as React from 'react';
import { CSSModule } from './utils';

export interface PopoverBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class PopoverBody extends React.Component<PopoverBodyProps> {}
export default PopoverBody;
