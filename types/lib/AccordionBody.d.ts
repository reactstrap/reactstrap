import * as React from 'react';
import { CSSModule } from './utils';

export interface AccordionBodyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
  accordionId: string;
}

declare class AccordionBody extends React.Component<AccordionBodyProps> {}
export default AccordionBody;
