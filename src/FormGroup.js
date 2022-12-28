import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  switch: PropTypes.bool,
  inline: PropTypes.bool,
  floating: PropTypes.bool,
  noMargin: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

function FormGroup(props) {
  const {
    className,
    cssModule,
    row,
    disabled,
    check,
    inline,
    floating,
    noMargin,
    tag: Tag,
    switch: switchProp,
    ...attributes
  } = props;

  const formCheck = check || switchProp;

  const classes = mapToCssModules(
    classNames(
      className,
      row ? 'row' : false,
      formCheck ? 'form-check' : false,
      switchProp ? 'form-switch' : false,
      formCheck || noMargin ? false : 'mb-3',
      formCheck && inline ? 'form-check-inline' : false,
      formCheck && disabled ? 'disabled' : false,
      floating && 'form-floating',
    ),
    cssModule,
  );

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return <Tag {...attributes} className={classes} />;
}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
