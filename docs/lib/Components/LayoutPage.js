/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import LayoutExample from '../examples/Layout';
const LayoutExampleSource = require('!!raw!../examples/Layout');

export default class LayoutsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Layout Components (Container, Row, Col)" />
        <h3>Layout</h3>
        <div className="docs-example">
          <LayoutExample />
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
{`Row.propTypes = {
  noGutters: PropTypes.bool
}`}
          </PrismCode>
        </pre>
        <h4>Col Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-\`width\`-12
    // auto => col-auto or col-\`width\`-auto
    // true => col or col-\`width\`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
