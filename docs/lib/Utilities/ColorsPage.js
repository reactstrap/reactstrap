/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import ColorExample from '../examples/Color';
const ColorExampleSource = require('!!raw!../examples/Color');

export default class ColorsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Colors" />
        <p>
          Convey meaning through color with a handful of emphasis utility
          classes. These may also be applied to links and will darken on hover
          just like our default link styles.
        </p>
        <div className="docs-example">
          <ColorExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ColorExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
