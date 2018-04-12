/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import SectionTitle from '../UI/SectionTitle';
import ButtonExample from '../examples/Button';
const ButtonExampleSource = require('!!raw!../examples/Button');

import ButtonOutline from '../examples/ButtonOutline';
const ButtonOutlineSource = require('!!raw!../examples/ButtonOutline');

import ButtonStateful from '../examples/ButtonStateful';
const ButtonStatefulSource = require('!!raw!../examples/ButtonStateful');

export default class ButtonsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Buttons" />
        <SectionTitle>Buttons</SectionTitle>
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
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
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
          In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done uses the components which already exist in this library.
        </p>
        <div className="docs-example">
          <ButtonStateful />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonStatefulSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
