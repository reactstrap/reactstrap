import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
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
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={toggleSplit}>
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
}


export default Example;
