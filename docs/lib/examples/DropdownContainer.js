import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(null);

  return (
    <div style={{ width: 300, height: 100, border: '1px solid #000', padding: '8px', overflow: 'hidden' }}>
      Container with overflow: hidden.<br />
      Last clicked: {lastClicked || 'null'}
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => setLastClicked(1)}>Action 1</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2)}>Action 2</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(3)}>Action 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Example;
