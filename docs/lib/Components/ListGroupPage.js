/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import ListGroupExample from '../examples/ListGroup';
import ListGroupBadgeExample from '../examples/ListGroupBadge';
import ListGroupDisabledItemsExample from '../examples/ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from '../examples/ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from '../examples/ListGroupContextualClasses';
import ListGroupCustomContentExample from '../examples/ListGroupCustomContent';
import ListGroupFlushExample from '../examples/ListGroupFlush';
import ListGroupHorizontalExample from '../examples/ListGroupHorizontal';
import ListGroupNumberedExample from '../examples/ListGroupNumbered';

const ListGroupBadgeExampleSource = require('!!raw-loader!../examples/ListGroupBadge');
const ListGroupExampleSource = require('!!raw-loader!../examples/ListGroup');
const ListGroupDisabledItemsExampleSource = require('!!raw-loader!../examples/ListGroupDisabledItems');
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw-loader!../examples/ListGroupAnchorsAndButtons');
const ListGroupContextualClassesExampleSource = require('!!raw-loader!../examples/ListGroupContextualClasses');
const ListGroupCustomContentExampleSource = require('!!raw-loader!../examples/ListGroupCustomContent');
const ListGroupFlushExampleSource = require('!!raw-loader!../examples/ListGroupFlush')
const ListGroupHorizontalExampleSource = require("!!raw-loader!../examples/ListGroupHorizontal");
const ListGroupNumberedExampleSource = require("!!raw-loader!../examples/ListGroupNumbered");

export default class ListGroupPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="ListGroup" />
        <div className="docs-example">
          <ListGroupExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{
  `ListGroup.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // boolean to render list group items edge-to-edge in a parent container
    flush: PropTypes.bool,
    // boolean to render list group items horizontal. string for specific breakpoint, or true to be always horizontal
    horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  }`
            }
          </PrismCode>
        </pre>

        <legend>Tags</legend>
        <div className="docs-example">
          <ListGroupBadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupBadgeExampleSource}
          </PrismCode>
        </pre>

        <legend>Disabled items</legend>
        <div className="docs-example">
          <ListGroupDisabledItemsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupDisabledItemsExampleSource}
          </PrismCode>
        </pre>

        <legend>Anchors and buttons</legend>
        <div className="docs-example">
          <p>Note: you need add action props to make these buttons fit the list.</p>
          <ListGroupAnchorsAndButtonsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupAnchorsAndButtonsExampleSource}
          </PrismCode>
        </pre>

        <legend>Contextual classes</legend>
        <div className="docs-example">
          <ListGroupContextualClassesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupContextualClassesExampleSource}
          </PrismCode>
        </pre>

        <legend>Custom content</legend>
        <div className="docs-example">
          <ListGroupCustomContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupCustomContentExampleSource}
          </PrismCode>
        </pre>

        <legend>Flush</legend>
        <div className="docs-example">
          <ListGroupFlushExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupFlushExampleSource}
          </PrismCode>
        </pre>

        <legend>Horizontal</legend>
        <div className="docs-example">
          <ListGroupHorizontalExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupHorizontalExampleSource}
          </PrismCode>
        </pre>

        <legend>Numbered</legend>
        <div className="docs-example">
          <ListGroupNumberedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupNumberedExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
