/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'lib/index';

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
        <p>Button Dropdown</p>
        <ButtonDropdown className="m-r-1">
          <DropdownToggle caret>
            <Button color="primary">Button Dropdown</Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown>
          <DropdownToggle caret>
            <Button color="primary">Button Dropdown</Button>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default DropdownsExample;
