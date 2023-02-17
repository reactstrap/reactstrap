import * as React from 'react';
import { CSSModule } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  color?: string;
  pill?: boolean;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLElement>;
  cssModule?: CSSModule;
}

declare class Badge extends React.Component<BadgeProps> {}
export default Badge;
