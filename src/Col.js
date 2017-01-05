import isobject from 'lodash.isobject';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

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
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  xs: true
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
    ...attributes
  } = props;
  const colClasses = [];

  colWidths.forEach(colWidth => {
    const columnProp = props[colWidth];

    if (!columnProp) {
      return;
    }

    const isXs = colWidth === 'xs';
    let colClass;

    delete attributes[colWidth];

    if (isobject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classNames({
        [colClass]: columnProp.size || columnProp.size === '',
        [`push${colSizeInterfix}${columnProp.push}`]: columnProp.push,
        [`pull${colSizeInterfix}${columnProp.pull}`]: columnProp.pull,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset
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
    <div {...attributes} className={classes} />
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
