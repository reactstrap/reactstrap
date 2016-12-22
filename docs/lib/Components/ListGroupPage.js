/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ListGroupExample from '../examples/ListGroup';
import ListGroupTagExample from '../examples/ListGroupTag';
import ListGroupDisabledItemsExample from '../examples/ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from '../examples/ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from '../examples/ListGroupContextualClasses';
import ListGroupCustomContentExample from '../examples/ListGroupCustomContent';

const ListGroupTagExampleSource = require('!!raw!../examples/ListGroupTag');
const ListGroupExampleSource = require('!!raw!../examples/ListGroup');
const ListGroupDisabledItemsExampleSource = require('!!raw!../examples/ListGroupDisabledItems');
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw!../examples/ListGroupAnchorsAndButtons');
const ListGroupContextualClassesExampleSource = require('!!raw!../examples/ListGroupContextualClasses');
const ListGroupCustomContentExampleSource = require('!!raw!../examples/ListGroupCustomContent');

export default class ListGroupPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="ListGroup Components" />
        <h3>ListGroup</h3>
        <div className="docs-example">
          <ListGroupExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupExampleSource}
          </PrismCode>
        </pre>

        <legend>Tags</legend>
        <div className="docs-example">
          <ListGroupTagExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ListGroupTagExampleSource}
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
      </div>
    );
  }
}
