/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CardExample from '../examples/Card';
import CardContentExample from '../examples/CardContentTypes';
import CardSizingExample from '../examples/CardSizing';
import CardAlignmentExample from '../examples/CardAlignment';
import CardHeaderFooterExample from '../examples/CardHeaderFooter';
import CardImageCapsExample from '../examples/CardImageCaps';
import CardImageOverlayExample from '../examples/CardImageOverlay';
import CardBackgroundsExample from '../examples/CardBackgrounds';
import CardOutlineExample from '../examples/CardOutline';
import CardGroupsExample from '../examples/CardGroups';
import CardDecksExample from '../examples/CardDecks';
import CardColumnsExample from '../examples/CardColumns';

const CardExampleSource = require('!!raw!../examples/Card.jsx');
const CardContentExampleSource = require('!!raw!../examples/CardContentTypes.jsx');
const CardSizingExampleSource = require('!!raw!../examples/CardSizing.jsx');
const CardAlignmentExampleSource = require('!!raw!../examples/CardAlignment.jsx');
const CardHeaderFooterExampleSource = require('!!raw!../examples/CardHeaderFooter.jsx');
const CardImageCapsExampleSource = require('!!raw!../examples/CardImageCaps.jsx');
const CardImageOverlayExampleSource = require('!!raw!../examples/CardImageOverlay.jsx');
const CardBackgroundsExampleSource = require('!!raw!../examples/CardBackgrounds.jsx');
const CardOutlineExampleSource = require('!!raw!../examples/CardOutline.jsx');
const CardGroupsExampleSource = require('!!raw!../examples/CardGroups.jsx');
const CardDecksExampleSource = require('!!raw!../examples/CardDecks.jsx');
const CardColumnsExampleSource = require('!!raw!../examples/CardColumns.jsx');

export default class CardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Card" />
        <h3>Card</h3>
        <hr />
        <div className="docs-example">
          <CardExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  className: PropTypes.any
};

CardBlock.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardDeck.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  // enable flexbox version of component (removes extra classes)
  flex: PropTypes.bool
};

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};`}
          </PrismCode>
        </pre>
        <h3>Content Types</h3>
        <div className="docs-example">
          <CardContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardContentExampleSource}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <CardSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardSizingExampleSource}
          </PrismCode>
        </pre>
        <h3>Text alignment</h3>
        <div className="docs-example">
          <CardAlignmentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardAlignmentExampleSource}
          </PrismCode>
        </pre>
        <h3>Header and Footer</h3>
        <div className="docs-example">
          <CardHeaderFooterExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardHeaderFooterExampleSource}
          </PrismCode>
        </pre>
        <h3>Image caps</h3>
        <div className="docs-example">
          <CardImageCapsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageCapsExampleSource}
          </PrismCode>
        </pre>
        <h3>Image overlays</h3>
        <div className="docs-example">
          <CardImageOverlayExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageOverlayExampleSource}
          </PrismCode>
        </pre>
        <h3>Background variants</h3>
        <div className="docs-example">
          <CardBackgroundsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardBackgroundsExampleSource}
          </PrismCode>
        </pre>
        <h3>Outline variants</h3>
        <div className="docs-example">
          <CardOutlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardOutlineExampleSource}
          </PrismCode>
        </pre>
        <h3>Groups</h3>
        <div className="docs-example">
          <CardGroupsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardGroupsExampleSource}
          </PrismCode>
        </pre>
        <h3>Decks</h3>
        <div className="docs-example">
          <CardDecksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardDecksExampleSource}
          </PrismCode>
        </pre>
        <h3>Columns</h3>
        <div className="docs-example">
          <CardColumnsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardColumnsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
