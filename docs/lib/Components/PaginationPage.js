/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import PaginationExample from '../examples/Pagination';
const PaginationExampleSource = require('!!raw-loader!../examples/Pagination');

import PaginationStateExample from '../examples/PaginationState';
const PaginationStateExampleSource = require('!!raw-loader!../examples/PaginationState');

import PaginationSizingLargeExample from '../examples/PaginationSizingLarge';
const PaginationSizingLargeExampleSource = require('!!raw-loader!../examples/PaginationSizingLarge');

import PaginationSizingSmallExample from '../examples/PaginationSizingSmall';
const PaginationSizingSmallExampleSource = require('!!raw-loader!../examples/PaginationSizingSmall');

export default class PaginationPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Pagination" />
        <div className="docs-example">
          <PaginationExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PaginationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};
`}
          </PrismCode>
        </pre>
        <SectionTitle>Disabled and active states</SectionTitle>
        <div className="docs-example">
          <PaginationStateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationStateExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <PaginationSizingLargeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingLargeExampleSource}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <PaginationSizingSmallExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingSmallExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
