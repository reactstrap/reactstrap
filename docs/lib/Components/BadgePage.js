/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BadgeExample from '../examples/Badge';
const BadgeExampleSource = require('!!raw!../examples/Badge');

import BadgePillsExample from '../examples/BadgePills';
const BadgePillsExampleSource = require('!!raw!../examples/BadgePills');

import BadgeVariationsExample from '../examples/BadgeVariations';
const BadgeVariationsExampleSource = require('!!raw!../examples/BadgeVariations');

export default class BadgesPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Badges" />
        <h3>Badges</h3>
        <hr />
        <p>Scale to parent</p>
        <div className="docs-example">
          <BadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeExampleSource}
          </PrismCode>
        </pre>
        <h3>Variations</h3>
        <div className="docs-example">
          <BadgeVariationsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeVariationsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <BadgePillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgePillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
