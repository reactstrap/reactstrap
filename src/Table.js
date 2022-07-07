import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Adds border to all sides of table */
  bordered: PropTypes.bool,
  /** Removes all borders */
  borderless: PropTypes.bool,
  /** Adds custom class name to component */
  className: PropTypes.string,
  /**  */
  cssModule: PropTypes.object,
  /** Makes the table dark */
  dark: PropTypes.bool,
  /** Enables a hover state on the rows within `<tbody>` */
  hover: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
  /** Responsive tables allow tables to be scrolled horizontally with ease */
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  responsiveTag: tagPropType,
  /** Make tables more compact by cutting cell padding in half when setting size as sm. */
  size: PropTypes.string,
  /** Adds zebra-striping to any table row within the `<tbody>` */
  striped: PropTypes.bool,
  /** Add custom tag to the component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

function Table(props) {
  const {
    className,
    cssModule,
    size,
    bordered,
    borderless,
    striped,
    dark,
    hover,
    responsive,
    tag: Tag,
    responsiveTag: ResponsiveTag,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      'table',
      size ? 'table-' + size : false,
      bordered ? 'table-bordered' : false,
      borderless ? 'table-borderless' : false,
      striped ? 'table-striped' : false,
      dark ? 'table-dark' : false,
      hover ? 'table-hover' : false,
    ),
    cssModule,
  );

  const table = <Tag {...attributes} ref={innerRef} className={classes} />;

  if (responsive) {
    const responsiveClassName = mapToCssModules(
      responsive === true
        ? 'table-responsive'
        : `table-responsive-${responsive}`,
      cssModule,
    );

    return (
      <ResponsiveTag className={responsiveClassName}>{table}</ResponsiveTag>
    );
  }

  return table;
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
