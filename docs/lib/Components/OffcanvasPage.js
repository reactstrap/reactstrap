/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import OffcanvasExample from '../examples/Offcanvas';
const OffcanvasExampleSource = require('!!raw-loader!../examples/Offcanvas');

export default class OffcanvasPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Offcanvas" />
        <div className="docs-example">
          <OffcanvasExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {OffcanvasExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`
Offcanvas.propTypes = {
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  direction: PropTypes.oneOf(['start', 'end', 'bottom', 'left', 'right']),
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func,]),
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  labelledBy: PropTypes.string,
  offcanvasClassName: PropTypes.string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  returnFocusAfterClose: PropTypes.bool,
  role: PropTypes.string,
  scrollable: PropTypes.bool,
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  unmountOnClose: PropTypes.bool,
  wrapClassName: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string,])
}

OffcanvasBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

OffcanvasHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  tag: tagPropType,
  toggle: PropTypes.func,
  wrapTag: tagPropType
}
`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
