import React, { useState } from 'react';
import {
  InputGroup,
  Input,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div>
      <InputGroup>
        <Button>I&lsquo;m a button</Button>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </InputGroup>
      <br />
      <InputGroup>
        <ButtonDropdown isOpen={splitButtonOpen} toggle={toggleSplit}>
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Input placeholder="and..." />
        <Button color="secondary">I&lsquo;m a button</Button>
      </InputGroup>
    </div>
  );
}

export default Example;
