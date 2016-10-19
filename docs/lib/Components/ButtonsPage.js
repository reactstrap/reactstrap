/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Button } from 'reactstrap';
import Helmet from 'react-helmet';
import ButtonExample from '../examples/Button';
const ButtonExampleSource = require('!!raw!../examples/Button');

import ButtonOutline from '../examples/ButtonOutline';
const ButtonOutlineSource = require('!!raw!../examples/ButtonOutline');

export default class ButtonsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Buttons" />
        <h3>Buttons</h3>
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

  onClick: PropTypes.func,
  size: PropTypes.string
}`}
          </PrismCode>
        </pre>
        <h3>Outline Buttons</h3>
        <div className="docs-example">
          <ButtonOutline />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonOutlineSource}
          </PrismCode>
        </pre>
        <h3>Sizes</h3>
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
        <h3>Active State</h3>
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
        <h3>Disabled State</h3>
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
      </div>
    );
  }
}
