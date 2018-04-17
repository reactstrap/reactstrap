/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

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

const CardExampleSource = require('!!raw!../examples/Card');
const CardContentExampleSource = require('!!raw!../examples/CardContentTypes');
const CardSizingExampleSource = require('!!raw!../examples/CardSizing');
const CardAlignmentExampleSource = require('!!raw!../examples/CardAlignment');
const CardHeaderFooterExampleSource = require('!!raw!../examples/CardHeaderFooter');
const CardImageCapsExampleSource = require('!!raw!../examples/CardImageCaps');
const CardImageOverlayExampleSource = require('!!raw!../examples/CardImageOverlay');
const CardBackgroundsExampleSource = require('!!raw!../examples/CardBackgrounds');
const CardOutlineExampleSource = require('!!raw!../examples/CardOutline');
const CardGroupsExampleSource = require('!!raw!../examples/CardGroups');
const CardDecksExampleSource = require('!!raw!../examples/CardDecks');
const CardColumnsExampleSource = require('!!raw!../examples/CardColumns');

export default class CardPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Card" />
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
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardDeck.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>
        <SectionTitle>Content Types</SectionTitle>
        <div className="docs-example">
          <CardContentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardContentExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <CardSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardSizingExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Text alignment</SectionTitle>
        <div className="docs-example">
          <CardAlignmentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardAlignmentExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Header and Footer</SectionTitle>
        <div className="docs-example">
          <CardHeaderFooterExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardHeaderFooterExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Image caps</SectionTitle>
        <div className="docs-example">
          <CardImageCapsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageCapsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Image overlays</SectionTitle>
        <div className="docs-example">
          <CardImageOverlayExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardImageOverlayExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Background variants</SectionTitle>
        <div className="docs-example">
          <CardBackgroundsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardBackgroundsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Outline variants</SectionTitle>
        <div className="docs-example">
          <CardOutlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardOutlineExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Groups</SectionTitle>
        <div className="docs-example">
          <CardGroupsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardGroupsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Decks</SectionTitle>
        <div className="docs-example">
          <CardDecksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardDecksExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Columns</SectionTitle>
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
