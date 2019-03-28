/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import ToastExample from '../examples/Toast';
const ToastExampleSource = require('!!raw-loader!../examples/Toast');

import ToastHeaderIconExample from '../examples/ToastHeaderIcon';
const ToastHeaderIconExampleSource = require('!!raw-loader!../examples/ToastHeaderIcon');

import ToastDismissExample from '../examples/ToastDismiss';
const ToastDismissExampleSource = require('!!raw-loader!../examples/ToastDismiss');

import AlertUncontrolledDismissExample from '../examples/AlertUncontrolledDismiss';
const AlertUncontrolledDismissExampleSource = require('!!raw-loader!../examples/AlertUncontrolledDismiss');

import { AlertFadelessExample, UncontrolledAlertFadelessExample } from '../examples/AlertFadeless';
const AlertFadelessExampleSource = require('!!raw-loader!../examples/AlertFadeless');

export default class ToastsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Toasts" />
        <div className="docs-example">
          <ToastExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ToastExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the toast fading in and out
  // See [Fade](/components/fade/) for more details
  transition: PropTypes.shape(Fade.propTypes),
}`}
          </PrismCode>
        </pre>

        <SectionTitle>Header icons</SectionTitle>
        <div className="docs-example">
          <ToastHeaderIconExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ToastHeaderIconExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Dismissing</SectionTitle>
        <div className="docs-example">
          <ToastDismissExample buttonLabel="Show toast" />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ToastDismissExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
