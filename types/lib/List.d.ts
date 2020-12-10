import * as React from 'react';
import { CSSModule } from './index';

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  type?: string;
  innerRef?: React.Ref<HTMLElement>;
}

declare class List extends React.Component<ListProps> {}
export default List;
