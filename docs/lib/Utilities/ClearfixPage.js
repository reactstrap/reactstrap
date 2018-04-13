/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import ClearfixExample from '../examples/Clearfix';

const ClearfixExampleSource = require('!!raw!../examples/Clearfix');

export default class ClearfixPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Clearfix" />
        <p>Easily clear <code className="highlighter-rouge">float</code>s by adding
          <code className="highlighter-rouge">.clearfix</code>
          <strong>to the parent element</strong>.
            Utilizes <a href="http://nicolasgallagher.com/micro-clearfix-hack/">
            the micro clearfix</a> as popularized by Nicolas Gallagher.
            Can also be used as a mixin.
            <div className="clearfix">...</div>
        </p>
        <div className="docs-example">
          <ClearfixExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ClearfixExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
