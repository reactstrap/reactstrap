import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import ListInlineExample from '../examples/ListInline';
import ListUnstyledExample from '../examples/ListUnstyled';

const ListInlineExampleSource = require('!!raw-loader!../examples/ListInline');
const ListUnstyledExampleSource = require('!!raw-loader!../examples/ListUnstyled');

export default class ListPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="List" />
        <div className="docs-example">
          <ListUnstyledExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListUnstyledExampleSource}
          </PrismCode>
        </pre>

        <legend>Inline</legend>
        <div className="docs-example">
          <ListInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListInlineExampleSource}
          </PrismCode>
        </pre>

        <h4>List Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{
`List.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string
};`
            }
          </PrismCode>
        </pre>
        <h4>ListInlineItem Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{
`ListInlineItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};`
            }
          </PrismCode>
        </pre>
      </div>
    );
  }
}
