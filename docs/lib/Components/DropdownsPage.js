/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import DropdownExample from '../examples/Dropdown';
import DropdownSizingExample from '../examples/DropdownSizing';
import CustomDropdownExample from '../examples/CustomDropdown';

const DropdownExampleSource = require('!!raw!../examples/Dropdown');
const CustomDropdownExampleSource = require('!!raw!../examples/CustomDropdown');

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
        <Helmet title="Dropdowns" />
        <h3>Dropdowns</h3>
        <p>
          The <code>Dropdown</code> component is used to pass the <code>isOpen</code> & <code>toggle</code> props via context to the following components: <code>DropdownToggle</code>, <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the <code>Button</code> component internally, meaning it also accepts all the props the <Link to="/components/buttons/">Button component</Link> accepts.
        </p>
        <h4>Advanced Positioning</h4>
        <p>
          The <code>DropdownMenu</code> can automatically be flipped (dropup vs dropdown) according to space available in the viewport by passing the <code>tether</code> prop to Dropdown <code>{`<Dropdown tether />`}</code>. For full customization, an object with <a href="http://tether.io/#options">Tether options</a> can be used instead.
        </p>
        <div className="docs-example">
          <DropdownExample />
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
  tag: PropTypes.string, // default: 'div'
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};`}
          </PrismCode>
        </pre>
        <h3>Alignment</h3>
        <p>To align the <code>DropdownMenu</code> to the right, add a <code>right</code> prop to it.</p>
        <div className="docs-example">
          <div style={{ display: 'inline-block' }}>
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
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
{'<DropdownItem header>Header</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Menu Dividers</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem divider/>'}
          </PrismCode>
        </pre>
        <h3>Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Disabled Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem disabled>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <div>
            <DropdownSizingExample group size="lg" />
            <DropdownSizingExample className="mt-1" />
            <DropdownSizingExample className="mt-1" group size="sm" />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <h4>Custom Dropdown</h4>
        <div className="docs-example">
          <CustomDropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CustomDropdownExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
