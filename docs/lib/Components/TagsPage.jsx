/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import TagExample from '../examples/Tag';
const TagExampleSource = require('!!raw!../examples/Tag.jsx');

import TagPillsExample from '../examples/TagPills';
const TagPillsExampleSource = require('!!raw!../examples/TagPills.jsx');

import TagVariationsExample from '../examples/TagVariations';
const TagVariationsExampleSource = require('!!raw!../examples/TagVariations.jsx');

export default class TagsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tags"/>
        <h3>Tags</h3>
        <hr/>
        <p>Scale to parent</p>
        <div className="docs-example">
          <TagExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TagExampleSource}
          </PrismCode>
        </pre>
        <h3>Variations</h3>
        <div className="docs-example">
          <TagVariationsExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TagVariationsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <TagPillsExample/>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TagPillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
