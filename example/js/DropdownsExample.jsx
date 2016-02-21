/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'lib/index';

class DropdownsExample extends React.Component {
  render() {
    return (
      <div>
        <h3>Dropdown</h3>
        <hr/>
        <Dropdown className="m-b-1">
          <DropdownToggle caret>
            Ello
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="m-b-1">
          <DropdownToggle>
            <Button color="danger">Open</Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="m-b-1 btn-group">
          <Button color="danger">Default</Button>
          <DropdownToggle caret>
            <Button color="danger"><span className="sr-only">Toggle Dropdown</span></Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownsExample;
