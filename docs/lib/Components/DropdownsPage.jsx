/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import Example from '../examples/DropdownMulti';
import ExampleSplit from '../examples/DropdownMultiSplit';
import DropdownExample from '../examples/Dropdown';
const DropdownExampleSource = require('!!raw!../examples/Dropdown.jsx');

export default class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExample2 = this.toggle.bind(this);
    this.state = {
      example2: false
    };
  }

  toggle() {
    this.setState({
      example2: !this.state.example2
    });
  }

  render() {
    return (
      <div>
        <h3>Dropdowns</h3>
        <div className="docs-example">
          <DropdownExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Dropdown.propTypes = {
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
        <h3>Alignment</h3>
        <p>To align the <code>DropdownMenu</code> to the right, add a <code>right</code> prop to it.</p>
        <div className="docs-example">
          <div style={{ display: 'inline-block'}}>
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <h3>Menu Headers</h3>
        <pre>
          <PrismCode className="language-jsx">
{`<DropdownItem header>Header</DropdownItem>`}
          </PrismCode>
        </pre>
        <h3>Menu Dividers</h3>
        <pre>
          <PrismCode className="language-jsx">
{`<DropdownItem divider/>`}
          </PrismCode>
        </pre>
        <h3>Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{`<DropdownItem>Action</DropdownItem>`}
          </PrismCode>
        </pre>
        <h3>Disabled Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{`<DropdownItem disabled>Action</DropdownItem>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
