/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import NavbarExample from '../examples/Navbar';
const NavbarExampleSource = require('!!raw!../examples/Navbar');
import NavbarTogglerExample from '../examples/NavbarToggler';
const NavbarTogglerExampleSource = require('!!raw!../examples/NavbarToggler');

export default class NavsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Navbar" />
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
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
        <SectionTitle>NavbarToggler</SectionTitle>
        <p>
          Place the <code>NavbarToggler</code> <b>after</b> <code>NavbarBrand</code> to have it appear on the right (typical setup).
          Reverse the order to have it appear on the left
        </p>
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
