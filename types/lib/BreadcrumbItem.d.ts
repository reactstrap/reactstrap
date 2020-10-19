import * as React from 'react';
import { CSSModule } from './index';

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  active?: boolean;
  cssModule?: CSSModule;
}

declare class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {}
export default BreadcrumbItem;
