import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const propTypes = {
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
};

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const { addonType } = props;

  return (
    <InputGroupButtonDropdown addonType={addonType} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </InputGroupButtonDropdown>
  );
}

Example.propTypes = propTypes;

export default Example;
