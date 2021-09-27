import * as React from 'react';
import { CSSModule } from './utils';

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  [key: string]: any;
  'aria-label'?: string;
  cssModule?: CSSModule;
  next?: boolean;
  previous?: boolean;
  first?: boolean;
  last?: boolean;
  tag?: React.ElementType;
}

declare class PaginationLink extends React.Component<PaginationLinkProps> {}
export default PaginationLink;
