import * as React from 'react';
import { CSSModule } from './utils';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ModalFooter extends React.Component<ModalFooterProps> {}
export default ModalFooter;
