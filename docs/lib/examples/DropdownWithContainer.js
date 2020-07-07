import React, { useState, useRef } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function DropdownWithContainer () {
  const [isOpen, setIsOpen] = useState(false),
        containerRef = useRef(null),
        toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu container={containerRef.current}>
          <DropdownItem>Apple</DropdownItem>
          <DropdownItem>Banana</DropdownItem>
          <DropdownItem>Grape</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div className={'other_div'} ref={containerRef}></div>
    </div>
  );
}
