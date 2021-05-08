/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import OffcanvasExample from '../examples/Offcanvas';
const OffcanvasExampleSource = require('!!raw-loader!../examples/Offcanvas');

export default class OffcanvasPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Offcanvas" />
        <div className="docs-example">
          <OffcanvasExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            { OffcanvasExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Offcanvas.propTypes = {
    openId: Proptypes.string.isRequired,
    toggle: Proptypes.func.isRequired,
    tag: tagPropType,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
};

OffcanvasBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  accordionId: PropTypes.string.isRequired,
};

OffcanvasHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  targetId: PropTypes.string.isRequired,
};

OffcanvasItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
};
`}
          </PrismCode>
        </pre>
        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`UncontrolledOffcanvas.propTypes = {
    tag: tagPropType,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
};

OffcanvasBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  accordionId: PropTypes.string.isRequired,
};

OffcanvasHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  targetId: PropTypes.string.isRequired,
};

OffcanvasItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
};
`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
