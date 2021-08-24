import * as React from 'react';
import { CSSModule } from './index';

export interface PlaceholderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  color?: string;
  tag?: React.ElementType;
  animation?: string;
  className?: string;
  cssModule?: CSSModule;
  size?: string;
  widths?: string[];
  innerRef?: React.Ref<HTMLElement>;
}

declare class Placeholder extends React.Component<PlaceholderProps> {}
export default Placeholder;