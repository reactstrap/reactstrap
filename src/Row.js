import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    tag: Tag,
    form,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
