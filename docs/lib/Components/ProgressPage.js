/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import { Card, CardText } from 'reactstrap';
import SectionTitle from '../UI/SectionTitle';
import ProgressExample from '../examples/Progress';
const ProgressExampleSource = require('!!raw!../examples/Progress');
import ProgressColorExample from '../examples/ProgressColor';
const ProgressColorExampleSource = require('!!raw!../examples/ProgressColor');
import ProgressLabelsExample from '../examples/ProgressLabels';
const ProgressLabelsExampleSource = require('!!raw!../examples/ProgressLabels');
import ProgressAnimatedExample from '../examples/ProgressAnimated';
const ProgressAnimatedExampleSource = require('!!raw!../examples/ProgressAnimated');
import ProgressStripedExample from '../examples/ProgressStriped';
const ProgressStripedExampleSource = require('!!raw!../examples/ProgressStriped');
import ProgressMultiExample from '../examples/ProgressMulti';
const ProgressMultiExampleSource = require('!!raw!../examples/ProgressMulti');
import ProgressMaxExample from '../examples/ProgressMax';
const ProgressMaxExampleSource = require('!!raw!../examples/ProgressMax');

export default class ProgressPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Progress" />
        <SectionTitle>Progress</SectionTitle>
        <div className="docs-example">
          <ProgressExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Progress.propTypes = {
  multi: PropTypes.bool,
  bar: PropTypes.bool, // used in combination with multi
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string // used to add class to the inner progress-bar element
};

Progress.defaultProps = {
  tag: 'progress',
  value: 0,
  max: 100,
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Color Variants</SectionTitle>
        <div className="docs-example">
          <div>
            <ProgressColorExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressColorExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Labels</SectionTitle>
        <div className="docs-example">
          <div>
            <ProgressLabelsExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressLabelsExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Striped</SectionTitle>
        <div className="docs-example">
          <div>
            <ProgressStripedExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressStripedExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Animated</SectionTitle>
        <p>
          The <code>animated</code> prop also adds the <code>striped</code> prop; there is no need to pass both.
        </p>
        <div className="docs-example">
          <div>
            <ProgressAnimatedExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressAnimatedExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Multiple bars / Stacked</SectionTitle>
        <div className="docs-example">
          <div>
            <ProgressMultiExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressMultiExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Max value</SectionTitle>
        <div className="docs-example">
          <div>
            <ProgressMaxExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ProgressMaxExampleSource}
          </PrismCode>
        </pre>

      </div>
    );
  }
}
