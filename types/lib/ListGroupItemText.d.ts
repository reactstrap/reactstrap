import * as React from 'react';
import { CSSModule } from './utils';

export interface ListGroupItemTextProps
  extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ListGroupItemText extends React.Component<
  ListGroupItemTextProps
> {}
export default ListGroupItemText;
