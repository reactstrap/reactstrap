/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import LabelExample from '../examples/Label';
const LabelExampleSource = require('!!raw!../examples/Label.jsx');

import LabelPillsExample from '../examples/LabelPills';
const LabelPillsExampleSource = require('!!raw!../examples/LabelPills.jsx');

import LabelVariationsExample from '../examples/LabelVariations';
const LabelVariationsExampleSource = require('!!raw!../examples/LabelVariations.jsx');

export default class LabelsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Labels"/>
        <h3>Labels</h3>
        <hr/>
        <p>Scale to parent</p>
        <div className="docs-example">
          <LabelExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelExampleSource}
          </PrismCode>
        </pre>
        <h3>Variations</h3>
        <div className="docs-example">
          <LabelVariationsExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelVariationsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <LabelPillsExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelPillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
