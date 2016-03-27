/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ModalExample from '../examples/Modal';
const ModalExampleSource = require('!!raw!../examples/Modal.jsx');

export default class ModalsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Modals"/>
        <h3>Modals</h3>
        <div className="docs-example">
          <ModalExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Modal.propTypes = {
  isOpen:  PropTypes.bool,
  // boolean to control the state of the popover
  toggle:  PropTypes.func,
  // callback for toggling isOpen in the controlling component
  size: PropTypes.string
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
