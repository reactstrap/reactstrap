import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'span'
};

const InputGroupText = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;

export default InputGroupText;
