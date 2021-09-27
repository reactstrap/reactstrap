import * as React from 'react';
import { CSSModule } from './utils';

export interface ListInlineItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class ListInlineItem extends React.Component<ListInlineItemProps> {}
export default ListInlineItem;
