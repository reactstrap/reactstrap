import * as React from 'react';
import { CSSModule } from './utils';

export interface FormFeedbackProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: string;
  cssModule?: CSSModule;
  valid?: boolean;
  tooltip?: boolean;
}

declare class FormFeedback extends React.Component<FormFeedbackProps> {}
export default FormFeedback;
