/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import LayoutExample from '../examples/Layout';
const LayoutExampleSource = require('!!raw!../examples/Layout.jsx');

export default class LayoutsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Layout Components (Container, Row, Col)"/>
        <h3>Layout</h3>
        <div className="docs-example">
          <LayoutExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LayoutExampleSource}
          </PrismCode>
        </pre>
        <h4>Container Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}`}
          </PrismCode>
        </pre>
        <h4>Row Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Row.propTypes = {}`}
          </PrismCode>
        </pre>
        <h4>Col Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
