/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import CarouselExample from '../examples/Carousel';
const CarouslExampleSource = require('!!raw!../examples/Carousel');

export default class CarouselPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Carousel" />

        <h3>Carousel</h3>
        <div className="docs-example">
          <CarouselExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CarouslExampleSource}
          </PrismCode>
        </pre>

        <h3>Properties</h3>
        <pre>
          <PrismCode className="language-jsx">
{`Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  cssModule: PropTypes.object,
  activeIndex: PropTypes.number,
  cycle: PropTypes.bool,
  wrap: PropTypes.bool,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]),
  keyboard: PropTypes.bool,
  hover: PropTypes.string
};`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
