/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import NavbarExample from '../examples/Navbar';
const NavbarExampleSource = require('!!raw!../examples/Navbar');
import NavbarTogglerExample from '../examples/NavbarToggler';
const NavbarTogglerExampleSource = require('!!raw!../examples/NavbarToggler');

export default class NavsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Navbar Components" />
        <h3>Navbar</h3>
        <div className="docs-example">
          <NavbarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavbarExampleSource}
          </PrismCode>
        </pre>
        <h4>Navbar Properties</h4>
        <p>See also <Link to="/components/navs/">Navs</Link> for additional components and PropTypes.</p>
        <pre>
          <PrismCode className="language-jsx">
{`Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), // alias for toggleable
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavbarBrand Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h3>NavbarToggler</h3>
        <div className="docs-example">
          <NavbarTogglerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavbarTogglerExampleSource}
          </PrismCode>
        </pre>
        <h4>NavbarToggler Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
