import * as React from 'react';
import { CSSModule } from './index';

export interface ListInlineProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ListInline extends React.Component<ListInlineProps> {}
export default ListInline;
