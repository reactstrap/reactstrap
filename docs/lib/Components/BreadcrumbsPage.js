/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import BreadcrumbExample from '../examples/Breadcrumb';
const BreadcrumbExampleSource = require('!!raw!../examples/Breadcrumb');

import BreadcrumbNoListExample from '../examples/BreadcrumbNoList';
const BreadcrumbNoListExampleSource = require('!!raw!../examples/BreadcrumbNoList');

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Breadcrumbs" />
        <div className="docs-example">
          <BreadcrumbExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Breadcrumb.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  'aria-label': PropTypes.string
};

BreadcrumbItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
`}
          </PrismCode>
        </pre>
        <SectionTitle>No list</SectionTitle>
        <hr />
        <p>Breadcrumbs can work without the usage of list markup.</p>
        <div className="docs-example">
          <BreadcrumbNoListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbNoListExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
