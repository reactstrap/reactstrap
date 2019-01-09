import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, deprecated, tagPropType } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: tagPropType,
  responsiveTag: tagPropType,
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

const Table = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    borderless,
    striped,
    inverse,
    dark,
    hover,
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
    borderless ? 'table-borderless' : false,
    striped ? 'table-striped' : false,
    (dark || inverse) ? 'table-dark' : false,
    hover ? 'table-hover' : false,
  ), cssModule);

  const table = <Tag {...attributes} ref={ref} className={classes} ref={ref} />;

  if (responsive) {
    const responsiveClassName = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;

    return (
      <ResponsiveTag className={responsiveClassName}>{table}</ResponsiveTag>
    );
  }

  return table;
});

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
