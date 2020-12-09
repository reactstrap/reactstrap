/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import ListInlineExample from '../examples/ListInline';

const ListInlineExampleSource = require('!!raw-loader!../examples/ListInline');

export default class ListInlinePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="List Inline" />
        <div className="docs-example">
          <ListInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListInlineExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{
`ListInline.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};`
            }
          </PrismCode>
        </pre>
      </div>
    );
  }
}
