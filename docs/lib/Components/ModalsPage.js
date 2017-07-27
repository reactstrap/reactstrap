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

import ModalCustomTimeoutExample from '../examples/ModalCustomTimeout';
const ModalCustomTimeoutExampleSource = require('!!raw!../examples/ModalCustomTimeout');

import ModalFadelessExample from '../examples/ModalFadeless';
const ModalFadelessExampleSource = require('!!raw!../examples/ModalFadeless');

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
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
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
  // backdropTransitionTimeout - controls appear, enter, and leave (default: 150)
  // If you need different values for appear v. enter v. leave, use the more
  // specific props like backdropTransitionAppearTimeout.
  backdropTransitionTimeout: PropTypes.number
  backdropTransitionAppearTimeout: PropTypes.number,
  backdropTransitionEnterTimeout: PropTypes.number,
  backdropTransitionLeaveTimeout: PropTypes.number,
  // modalTransitionTimeout - controls appear, enter, and leave (default: 300)
  // If you need different values for appear v. enter v. leave, use the more
  // specific props like modalTransitionAppearTimeout.
  modalTransitionTimeout: PropTypes.number,
  modalTransitionAppearTimeout: PropTypes.number,
  modalTransitionEnterTimeout: PropTypes.number,
  modalTransitionLeaveTimeout: PropTypes.number,
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
      </div>
    );
  }
}
