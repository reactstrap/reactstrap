import * as React from 'react';
import { CSSModule } from './index';

export interface ListInlineItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

declare class ListInlineItem extends React.Component<ListInlineItemProps> {}
export default ListInlineItem;