/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import Example from '../examples/ButtonDropdownMulti';
import ExampleSplit from '../examples/ButtonDropdownMultiSplit';
import ButtonDropdownExample from '../examples/ButtonDropdown';
const ButtonDropdownExampleSource = require('!!raw!../examples/ButtonDropdown.jsx');

export default class ButtonDropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <h3>Button Dropdown</h3>
        <div className="docs-example">
          <ButtonDropdownExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonDropdownExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggle: PropTypes.func,
  dataToggle: PropTypes.string,
  'aria-haspopup': PropTypes.bool
};`}
          </PrismCode>
        </pre>
        <h3>Single button dropdowns</h3>
        <div className="docs-example">
          <div>
            <Example color="secondary" text="Default"/>
            <Example color="primary" text="Primary"/>
            <Example color="success" text="Success"/>
            <Example color="info" text="Info"/>
            <Example color="warning" text="Warning"/>
            <Example color="danger" text="Darning"/>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown color="primary" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Text
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <h3>Single button dropdowns</h3>
        <div className="docs-example">
          <div>
            <ExampleSplit color="secondary" text="Default"/>
            <ExampleSplit color="primary" text="Primary"/>
            <ExampleSplit color="success" text="Success"/>
            <ExampleSplit color="info" text="Info"/>
            <ExampleSplit color="warning" text="Warning"/>
            <ExampleSplit color="danger" text="Darning"/>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown color="primary" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Text
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <div>
            <ButtonDropdown isOpen={this.state.btnLg} toggle={()=> {this.setState({btnLg: !this.state.btnLg})}}>
              <DropdownToggle caret>
                <Button size="lg">Large Button</Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="m-t-1">
            <ButtonDropdown isOpen={this.state.btnSm} toggle={()=> {this.setState({btnSm: !this.state.btnSm})}}>
              <DropdownToggle caret>
                <Button size="sm">Small Button</Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    <Button size="lg">Large Button</Button>
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    <Button size="sm">Small Button</Button>
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <h3>Dropup variation</h3>
        <div className="docs-example">
          <div>
            <ButtonDropdown dropup isOpen={this.state.btnDropup} toggle={()=> {this.setState({btnDropup: !this.state.btnDropup})}}>
              <DropdownToggle caret>
                <Button size="lg">Dropup</Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle} dropup>
  <DropdownToggle caret>
    <Button>Dropup</Button>
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
