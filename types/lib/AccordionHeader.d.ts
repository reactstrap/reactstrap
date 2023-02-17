import * as React from 'react';
import { CSSModule } from './utils';

export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
  targetId: string;
}

declare class AccordionHeader extends React.Component<AccordionHeaderProps> {}
export default AccordionHeader;
