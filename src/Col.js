import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { breakpoints, colReordering } from './utils';

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: stringOrNumberProp,
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
  className: PropTypes.node,
  xsFirst: PropTypes.bool,
  xsLast: PropTypes.bool,
  xsUnordered: PropTypes.bool,
  smFirst: PropTypes.bool,
  smLast: PropTypes.bool,
  smUnordered: PropTypes.bool,
  mdFirst: PropTypes.bool,
  mdLast: PropTypes.bool,
  mdUnordered: PropTypes.bool,
  lgFirst: PropTypes.bool,
  lgLast: PropTypes.bool,
  lgUnordered: PropTypes.bool,
  xlFirst: PropTypes.bool,
  xlLast: PropTypes.bool,
  xlUnordered: PropTypes.bool,
};

const defaultProps = {
  xs: 12
};

const Col = (props) => {
  const {
    className,
    ...attributes
  } = props;

  // Pass in column class names
  const colClasses = [];
  const colSizes = [...breakpoints];
  colSizes.forEach(colSize => {
    const columnProp = props[colSize];
    delete attributes[colSize];
    let colClass;

    if (!columnProp) {
      return;
    } else if (columnProp.size) {
      if (columnProp.size === 'auto') {
        colClass = `col-${colSize}`;
      } else {
        colClass = `col-${colSize}-${columnProp.size}`;
      }

      colClasses.push(classNames({
        [colClass]: columnProp.size,
        [`push-${colSize}-${columnProp.push}`]: columnProp.push,
        [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
        [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset
      }));
    } else {
      if (columnProp === 'auto' || columnProp === true) {
        colClass = `col-${colSize}`;
      } else {
        colClass = `col-${colSize}-${columnProp}`;
      }

      colClasses.push(colClass);
    }
  });

  // Pass in visual order class names
  const orderClasses = [];
  const colOrderings = [];
  breakpoints.map(bp => colReordering
      .map(order => colOrderings.push(bp + order[0].toUpperCase() + order.slice(1))));

  colOrderings.forEach(colOrder => {
    const orderProp = props[colOrder];
    delete attributes[colOrder];

    if (!orderProp) return;

    orderClasses.push(`flex-${colOrder.slice(0, 2)}-${colOrder.slice(2).toLowerCase()}`);
  });

  const classes = (orderClasses.length > 0)
      ? classNames(className, colClasses, orderClasses)
      : classNames(className, colClasses);

  return (
    <div {...attributes} className={classes} />
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
