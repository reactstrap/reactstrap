/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BreadcrumbExample from '../examples/Breadcrumb';
const BreadcrumbExampleSource = require('!!raw!../examples/Breadcrumb');

import BreadcrumbNoListExample from '../examples/BreadcrumbNoList';
const BreadcrumbNoListExampleSource = require('!!raw!../examples/BreadcrumbNoList');

export default class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Breadcrumbs" />
        <h3>Breadcrumbs</h3>
        <div className="docs-example">
          <BreadcrumbExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BreadcrumbExampleSource}
          </PrismCode>
        </pre>
        <h3>No list</h3>
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
