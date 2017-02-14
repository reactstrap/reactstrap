/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ModalExample from '../examples/Modal';
const ModalExampleSource = require('!!raw!../examples/Modal');

import ModalBackdropExample from '../examples/ModalBackdrop';
const ModalBackdropExampleSource = require('!!raw!../examples/ModalBackdrop');

import ModalNestedExample from '../examples/ModalNested';
const ModalNestedExampleSource = require('!!raw!../examples/ModalNested');

export default class ModalsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Modals" />
        <h3>Modals</h3>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalExample buttonLabel="Launch Modal" />
            </div>
            <div className="btn">
              <ModalExample
                buttonLabel="Launch Modal with custom className"
                className="my-custom-modal"
              />
            </div>
          </div>
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
  size: PropTypes.string,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  keyboard: PropTypes.bool,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
}`}
          </PrismCode>
        </pre>

        <h4>Backdrop</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalBackdropExample buttonLabel="Launch Modal" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalBackdropExampleSource}
          </PrismCode>
        </pre>

        <h4>Nested Modals</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalNestedExample buttonLabel="Launch Modal w/ Nested Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalNestedExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
