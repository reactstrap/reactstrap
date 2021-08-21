import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import PlaceholderExample from '../examples/Placeholder'
const PlaceholderExampleSource = require('!!raw-loader!../examples/Placeholder')

import PlaceholderWidthExample from '../examples/PlaceholderWidth';
const PlaceholderWidthExampleSource = require('!!raw-loader!../examples/PlaceholderWidth');

import PlaceholderColorExample from '../examples/PlaceholderColor';
const PlaceholderColorExampleSource = require('!!raw-loader!../examples/PlaceholderColor');

import PlaceholderSizingExample from '../examples/PlaceholderSizing';
const PlaceholderSizingExampleSource = require('!!raw-loader!../examples/PlaceholderSizing');

import PlaceholderAnimationExample from '../examples/PlaceholderAnimation';
const PlaceholderAnimationExampleSource = require('!!raw-loader!../examples/PlaceholderAnimation');

export default class Placeholder extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Placeholder" />
        <div className="docs-example">
          <PlaceholderExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaceholderExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`
Placeholder.propTypes = {
  color: PropTypes.string,
  tag: tagPropType,
  animation: PropTypes.oneOf(['glow', 'wave']),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm', 'xs']),
  widths: PropTypes.array,
};

PlaceholderButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string,
  tag: tagPropType
}
            `}
          </PrismCode>
        </pre>
        <SectionTitle>Width</SectionTitle>
        <div className="docs-example">
          <PlaceholderWidthExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaceholderWidthExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Animation</SectionTitle>
        <div className="docs-example">
          <PlaceholderAnimationExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaceholderAnimationExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Color</SectionTitle>
        <div className="docs-example">
          <PlaceholderColorExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaceholderColorExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <PlaceholderSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaceholderSizingExampleSource}
          </PrismCode>
        </pre>
      </div>
    )
  }
}