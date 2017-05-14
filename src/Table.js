import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: PropTypes.bool,
  hover: PropTypes.bool,
  reflow: PropTypes.bool,
  responsive: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

const Table = (props) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    striped,
    inverse,
    hover,
    reflow,
    responsive,
    tag: Tag,
    responsiveTag: ResponsiveTag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    striped ? 'table-striped' : false,
    inverse ? 'table-inverse' : false,
    hover ? 'table-hover' : false,
    reflow ? 'table-reflow' : false
  ), cssModule);

  const table = <Tag {...attributes} className={classes} />;

  if (responsive) {
    return (
      <ResponsiveTag className="table-responsive">{table}</ResponsiveTag>
    );
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
