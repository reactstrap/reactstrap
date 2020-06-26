/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import ButtonExample from '../examples/Button';
const ButtonExampleSource = require('!!raw-loader!../examples/Button');

import ButtonOutline from '../examples/ButtonOutline';
const ButtonOutlineSource = require('!!raw-loader!../examples/ButtonOutline');

import ButtonStateful from '../examples/ButtonStateful';
const ButtonStatefulSource = require('!!raw-loader!../examples/ButtonStateful');

import ButtonCloseIcon from '../examples/ButtonCloseIcon';
const ButtonCloseIconSource = require('!!raw-loader!../examples/ButtonCloseIcon');

import ButtonToggle from '../examples/ButtonToggle';
const ButtonToggleSource = require('!!raw-loader!../examples/ButtonToggle');

export default class ButtonsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Buttons" />
        <div className="docs-example">
          <ButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  outline: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
  ]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,

  // use close prop for BS4 close icon utility
  close: PropTypes.bool,
}

Button.defaultProps = {
  color: 'secondary',
  tag: 'button',
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Outline Buttons</SectionTitle>
        <div className="docs-example">
          <ButtonOutline />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonOutlineSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizes</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg">Large Button</Button>{' '}
          <Button color="secondary" size="lg">Large Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg">Large Button</Button>{' '}
<Button color="secondary" size="lg">Large Button</Button>`}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <Button color="primary" size="sm">Small Button</Button>{' '}
          <Button color="secondary" size="sm">Small Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button>`}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <Button color="primary" size="lg" block>Block level button</Button>
          <Button color="secondary" size="lg" block>Block level button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`}
          </PrismCode>
        </pre>
        <SectionTitle>Active State</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg" active>Primary link</Button>{' '}
          <Button color="secondary" size="lg" active>Link</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>`}
          </PrismCode>
        </pre>
        <SectionTitle>Disabled State</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
          <Button color="secondary" size="lg" disabled>Button</Button>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>`}
          </PrismCode>
        </pre>

        <SectionTitle>Checkbox and Radio Buttons (Stateful Buttons)</SectionTitle>
        <p>
          In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done using the components which already exist in this library.
        </p>
        <div className="docs-example">
          <ButtonStateful />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonStatefulSource}
          </PrismCode>
        </pre>

        <SectionTitle>Close icon</SectionTitle>
        <p>
          Use a generic close icon to dismiss content. Use <code>&lt;Button close /&gt;</code> for the default icon. Otherwise, custom content for the button
          may be defined. (e.g. JSX: <code>&lt;Button close&gt;&lt;span aria-hidden="true"&gt;&ndash;&lt;/span&gt;&lt;/Button&gt;</code>) The default aria-label is "Close".
        </p>
        <div className="docs-example">
          <ButtonCloseIcon />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonCloseIconSource}
          </PrismCode>
        </pre>

        <SectionTitle>Button Toggle</SectionTitle>
        <p>
          Button toggle state
        </p>
        <div className="docs-example">
          <ButtonToggle />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonToggleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
