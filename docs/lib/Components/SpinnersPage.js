import React from 'react';
import { PrismCode } from 'react-prism';
import { Spinner } from 'reactstrap';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import SpinnerExample from '../examples/Spinner';

import SpinnerGrowerExample from '../examples/SpinnerGrower';
const SpinnerExampleSource = require('!!raw-loader!../examples/Spinner');
const SpinnerGrowerExampleSource = require('!!raw-loader!../examples/SpinnerGrower');
export default class SpinnersPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Spinners" />
        <div className="docs-example">
          <SpinnerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{SpinnerExampleSource}</PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`Spinner.propTypes = {
  type: PropTypes.string, // default: 'border'
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string, // default: 'Loading...'
};
`}
          </PrismCode>
        </pre>
        <SectionTitle>Growing Spinner</SectionTitle>
        <div className="docs-example">
          <SpinnerGrowerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {SpinnerGrowerExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizes</SectionTitle>
        <div className="docs-example">
          <Spinner size="sm" color="primary" />{' '}
          <Spinner size="sm" color="secondary" />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {`<Spinner size="sm" color="primary" />{' '}
<Spinner size="sm" color="secondary" />`}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
          <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {`<Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
