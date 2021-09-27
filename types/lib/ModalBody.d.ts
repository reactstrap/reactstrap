import * as React from 'react';
import { CSSModule } from './utils';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ModalBody extends React.Component<ModalBodyProps> {}
export default ModalBody;
