import * as React from 'react';
import { CSSModule } from './index';

export interface OffcanvasBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class OffcanvasBody extends React.Component<OffcanvasBodyProps> {}
export default OffcanvasBody;
