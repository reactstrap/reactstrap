/* eslint react/prefer-stateless-function: 0 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'p',
  type: 'text',
};

class Input extends React.Component {
  render() {
    const {
      className,
      cssModule,
      type,
      size,
      state,
      tag,
      addon,
      static: staticInput,
      getRef,
      ...attributes,
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (staticInput) {
      formControlClass = `${formControlClass}-static`;
      Tag = tag;
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    const classes = mapToCssModules(classNames(
      className,
      state ? `form-control-${state}` : false,
      size ? `form-control-${size}` : false,
      formControlClass
    ), cssModule);

    if (Tag === 'input') {
      attributes.type = type;
    }

    return (
      <Tag {...attributes} ref={getRef} className={classes} />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
