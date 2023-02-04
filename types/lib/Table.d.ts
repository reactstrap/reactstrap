import * as React from 'react';
import { CSSModule } from './utils';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  [key: string]: any;
  cssModule?: CSSModule;
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean | string;
  tag?: React.ElementType;
  responsiveTag?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLTableElement>;
}

declare class Table extends React.Component<TableProps> {}
export default Table;
