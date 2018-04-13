/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import { Link } from 'react-router';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import ButtonGroupExample from '../examples/ButtonGroup';
const ButtonGroupExampleSource = require('!!raw!../examples/ButtonGroup');

import ButtonToolbarExample from '../examples/ButtonToolbar';
const ButtonToolbarExampleSource = require('!!raw!../examples/ButtonToolbar');


export default class ButtonGroupPage extends React.Component {
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
        <PageTitle title="Button Group" />
        <div className="docs-example">
          <div>
            <ButtonGroupExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonGroupExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};`}
          </PrismCode>
        </pre>
        <SectionTitle>Button Toolbar</SectionTitle>
        <div className="docs-example">
          <ButtonToolbarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonToolbarExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup className="mt-1">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup size="sm" className="mt-1">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonGroup size="lg">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<ButtonGroup size="sm">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`}
          </PrismCode>
        </pre>
        <SectionTitle>Nesting</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>`}
          </PrismCode>
        </pre>
        <SectionTitle>Vertical variation</SectionTitle>
        <div className="docs-example">
          <ButtonGroup vertical>
            <Button>1</Button>
            <Button>2</Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
