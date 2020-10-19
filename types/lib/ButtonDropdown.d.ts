import * as React from 'react';
import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';
export {
  UncontrolledDropdownProps as UncontrolledButtonDropdownProps,
  DropdownProps as ButtonDropdownProps,
};

declare class ButtonDropdown extends React.Component<DropdownProps> {}
export default ButtonDropdown;
