import * as React from 'react';
import { CSSModule } from './utils';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  color?: string;
  pill?: boolean;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class Tag extends React.Component<TagProps> {}
export default Tag;
