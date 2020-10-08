import * as React from 'react';
import { DropdownProps } from './Dropdown';

export interface InputGroupButtonDropdownProps extends DropdownProps {
  addonType: 'prepend' | 'append';
}

declare class InputGroupButtonDropdown extends React.Component<
  InputGroupButtonDropdownProps
> {}
export default InputGroupButtonDropdown;
