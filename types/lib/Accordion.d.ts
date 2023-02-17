import * as React from 'react';
import { CSSModule } from './utils';

export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  flush?: boolean;
  innerRef?: React.Ref<HTMLElement>;
  open: string | string[];
}

export interface UncontrolledAccordionProps extends Omit<AccordionProps, 'open'> {
  defaultOpen?: string | string[];
  stayOpen?: boolean;
}

declare class Accordion extends React.Component<AccordionProps> {}
export default Accordion;
