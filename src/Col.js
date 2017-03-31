import isobject from 'lodash.isobject';
import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;
const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array,
};

const defaultProps = {
  tag: 'div',
  widths: colWidths,
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = (props) => {
  const {
    className,
    cssModule,
    widths,
    tag: Tag,
    ...attributes
  } = props;
  const colClasses = [];

  widths.forEach((colWidth, i) => {
    let columnProp = props[colWidth];

    if (!i && columnProp === undefined) {
      columnProp = true;
    }

    delete attributes[colWidth];

    if (!columnProp) {
      return;
    }

    const isXs = !i;
    let colClass;

    if (isobject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classNames({
        [colClass]: columnProp.size || columnProp.size === '',
        [`push${colSizeInterfix}${columnProp.push}`]: columnProp.push || columnProp.push === 0,
        [`pull${colSizeInterfix}${columnProp.pull}`]: columnProp.pull || columnProp.pull === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      })), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  const classes = mapToCssModules(classNames(
    className,
    colClasses
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
