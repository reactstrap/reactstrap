import * as React from 'react';
import { CSSModule } from './utils';

export interface OffcanvasHeaderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  wrapTag?: React.ElementType;
  toggle?: React.MouseEventHandler<any>;
}

declare class OffcanvasHeader extends React.Component<OffcanvasHeaderProps> {}
export default OffcanvasHeader;
