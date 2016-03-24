/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class DropdownsExample extends React.Component {
  constructor(props) {
    super(props);

    this.exampleToggle = this.exampleToggle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dd1: false,
      dd2: false,
      dd3: false,
      dd4: false,
      dd5: false,
      dd6: false
    };
  }

  exampleToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }

  toggle() {
    this.setState({
      dd6: !this.state.dd6
    });
  }

  render() {
    return (
      <div>
        <h3 id="primary">Dropdown</h3>
        <hr/>
        <Dropdown className="m-b-1" isOpen={this.state.dd2} toggle={() => { this.setState({ dd2: !this.state.dd2 });}}>
          <DropdownToggle>
            <Button color="danger">Default</Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown tether={{ target: '#caret' }} className="m-b-1 btn-group" isOpen={this.state.dd3} toggle={() => { this.setState({ dd3: !this.state.dd3 });}}>
          <Button id="caret" color="danger">Caret</Button>
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
        <ButtonDropdown className="m-r-1" isOpen={this.state.dd4} toggle={() => { this.setState({ dd4: !this.state.dd4 });}}>
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
        <ButtonDropdown isOpen={this.state.dd5} toggle={() => { this.setState({ dd5: !this.state.dd5 });}}>
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
        <Dropdown tether className="m-y-1" isOpen={this.state.dd6} toggle={this.toggle}>
          <DropdownToggle id="btn">
            <Button color="danger">Tethered Dropdown Example</Button>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown tether className="m-y-1" isOpen={this.state.dd1} toggle={this.exampleToggle}>
          <DropdownToggle caret>
            Custom Menu
          </DropdownToggle>
          <DropdownMenu>
            <div className="p-x-1">
              <h4>Custom Markup</h4>
              <p>Can go here</p>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownsExample;
