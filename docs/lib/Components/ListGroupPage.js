/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import ListGroupExample from '../examples/ListGroup';
const ListGroupExampleSource = require('!!raw!../examples/ListGroup');

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
        <h4>Container Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
