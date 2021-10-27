import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType, deprecated } from './utils';

const rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const propTypes = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};

const defaultProps = {
  tag: 'div',
  widths: rowColWidths
};

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    tag: Tag,
    form,
    widths,
    ...attributes
  } = props;

  const colClasses = [];

  widths.forEach((colWidth, i) => {
    let colSize = props[colWidth];

    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    const isXs = !i;
    colClasses.push(isXs ? `row-cols-${colSize}` : `row-cols-${colWidth}-${colSize}`);
  });

  const classes = mapToCssModules(classNames(
    className,
    noGutters ? 'gx-0' : null,
    form ? 'form-row' : 'row',
    colClasses
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
