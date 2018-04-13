/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Alert } from 'reactstrap';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import FadeExample from '../examples/Fade';
const FadeExampleSource = require('!!raw!../examples/Fade');

export default class FadePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Fade" />
        <div className="docs-example">
          <FadeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FadeExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Fade.propTypes = {
    // Controls if the fade is currently showing or not (default: true)
    in: PropTypes.bool, 

    // All of these match [react-transition-group/Transition](https://reactcommunity.org/react-transition-group/#Transition) props
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    appear: PropTypes.bool, // (default: true)
    enter: PropTypes.bool,  // (default: true)
    exit: PropTypes.bool,   // (default: true)
    timeout: PropTypes.oneOfType([ // (default: 150)
        PropTypes.number,
        PropTypes.shape({
            enter: PropTypes.number,
            exit: PropTypes.number,
        }).isRequired,
    ]),
    addEndListener: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,

    // The component(s) that should be faded
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    // Pass in a component or primitive component name to override the default element
    // (default: 'div')
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    // Class always applied to the Fade element (default: 'fade')
    baseClass: PropTypes.string,
    // Class applied to transition the Fade element in (default: 'show')
    baseClassActive: PropTypes.string,
    // Other classes that should always be applied
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // Any other props provided will be applied to the element created (specified by tag)
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
