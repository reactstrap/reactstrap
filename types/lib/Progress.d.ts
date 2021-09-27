import * as React from 'react';
import { CSSModule } from './utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  cssModule?: CSSModule;
  barClassName?: string;
  barStyle?: React.CSSProperties;
  barAriaValueText?: string;
  barAriaLabelledBy?: string;
}

declare class Progress extends React.Component<ProgressProps> {}
export default Progress;
