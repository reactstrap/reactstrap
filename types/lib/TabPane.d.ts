import * as React from 'react';
import { CSSModule } from './utils';

export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  tabId?: number | string;
}

declare class TabPane extends React.Component<TabPaneProps> {}
export default TabPane;
