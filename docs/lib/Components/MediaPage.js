/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import MediaExample from '../examples/Media';
const MediaExampleSource = require('!!raw-loader!../examples/Media');

import MediaNestedExample from '../examples/MediaNested';
const MediaNestedExampleSource = require('!!raw-loader!../examples/MediaNested');

import MediaAlignmentExample from '../examples/MediaAlignment';
const MediaAlignmentExampleSource = require('!!raw-loader!../examples/MediaAlignment');

import MediaListExample from '../examples/MediaList';
const MediaListExampleSource = require('!!raw-loader!../examples/MediaList');

export default class MediaPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Media object" />
        <div className="docs-example">
          <MediaExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};`}
          </PrismCode>
        </pre>
        <h4>Nesting</h4>
        <div className="docs-example">
          <MediaNestedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaNestedExampleSource}
          </PrismCode>
        </pre>
        <h4>Alignment</h4>
        <div className="docs-example">
          <MediaAlignmentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaAlignmentExampleSource}
          </PrismCode>
        </pre>
        <h4>Media list</h4>
        <div className="docs-example">
          <MediaListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MediaListExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
