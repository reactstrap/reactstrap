/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import FormExample from '../examples/Form';
const FormExampleSource = require('!!raw!../examples/Form');

import FormGridExample from '../examples/FormGrid';
const FormGridExampleSource = require('!!raw!../examples/FormGrid');

import FormInlineExample from '../examples/FormInline';
const FormInlineExampleSource = require('!!raw!../examples/FormInline');

import FormFeedbackExample from '../examples/FormFeedback';
const FormFeedbackExampleSource = require('!!raw!../examples/FormFeedback');

import InputTypeExample from '../examples/InputType';
const InputTypeExampleSource = require('!!raw!../examples/InputType');

import InputSizingExample from '../examples/InputSizing';
const InputSizingExampleSource = require('!!raw!../examples/InputSizing');

import InputGridSizingExample from '../examples/InputGridSizing';
const InputGridSizingExampleSource = require('!!raw!../examples/InputGridSizing');

import LabelHiddenExample from '../examples/LabelHidden';
const LabelHiddenExampleSource = require('!!raw!../examples/LabelHidden');

export default class FormPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Form" />
        <h3>Form</h3>
        <div className="docs-example">
          <FormExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormExampleSource}
          </PrismCode>
        </pre>

        <h3>Form Grid</h3>
        <div className="docs-example">
          <FormGridExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormGridExampleSource}
          </PrismCode>
        </pre>

        <h3>Inline Form</h3>
        <div className="docs-example">
          <FormInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormInlineExampleSource}
          </PrismCode>
        </pre>

        <h3>Form Feedback</h3>
        <div className="docs-example">
          <FormFeedbackExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormFeedbackExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Types</h3>
        <div className="docs-example">
          <InputTypeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputTypeExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Sizing</h3>
        <div className="docs-example">
          <InputSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputSizingExampleSource}
          </PrismCode>
        </pre>

        <h3>Input Grid Sizing</h3>
        <div className="docs-example">
          <InputGridSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputGridSizingExampleSource}
          </PrismCode>
        </pre>

        <h3>Hidden Labels</h3>
        <div className="docs-example">
          <LabelHiddenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelHiddenExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
