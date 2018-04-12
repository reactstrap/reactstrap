/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import SectionTitle from '../UI/SectionTitle';
import ModalExample from '../examples/Modal';
const ModalExampleSource = require('!!raw!../examples/Modal');

import ModalBackdropExample from '../examples/ModalBackdrop';
const ModalBackdropExampleSource = require('!!raw!../examples/ModalBackdrop');

import ModalNestedExample from '../examples/ModalNested';
const ModalNestedExampleSource = require('!!raw!../examples/ModalNested');

import ModalCustomTimeoutExample from '../examples/ModalCustomTimeout';
const ModalCustomTimeoutExampleSource = require('!!raw!../examples/ModalCustomTimeout');

import ModalFadelessExample from '../examples/ModalFadeless';
const ModalFadelessExampleSource = require('!!raw!../examples/ModalFadeless');

import ModalExternalExample from '../examples/ModalExternal';
const ModalExternalExampleSource = require('!!raw!../examples/ModalExternal');

export default class ModalsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Modals" />
        <SectionTitle>Modals</SectionTitle>
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
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition 
  // timeout is 300ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  modalTransition: PropTypes.shape(Fade.propTypes),
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

        <h4>Modals with Custom Transition Timeouts</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalCustomTimeoutExample buttonLabel="Launch Modal with Custom Transition Timeouts Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalCustomTimeoutExampleSource}
          </PrismCode>
        </pre>

        <h4>Modals without Fade Effect</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalFadelessExample buttonLabel="Launch Modal without Fade Effect Example" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalFadelessExampleSource}
          </PrismCode>
        </pre>

        <h4>Modals with external button</h4>
        <div className="docs-example">
          <div className="btn-group">
            <div className="btn">
              <ModalExternalExample buttonLabel="Launch Modal with external close button" />
            </div>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ModalExternalExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
