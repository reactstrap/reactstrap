import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { breakpoints, colReordering, rowHAlignment, rowVAlignment } from './utils';

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

const breaktpointOrAllProp = PropTypes.oneOf([...breakpoints, 'all']);

const orderProps = PropTypes.oneOfType([
  PropTypes.bool,
  breaktpointOrAllProp,
  PropTypes.arrayOf(breaktpointOrAllProp)
]);

const propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  first: orderProps,
  last: orderProps,
  unordered: orderProps,
  className: PropTypes.node
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
  const colSizes = [ ...breakpoints ];
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
  const colOrderings = [...colReordering];
  colOrderings.forEach(colOrder => {
    const orderProp = props[colOrder];
    delete attributes[colOrder];

    let orderClass;

    if (!orderProp) {
      return;
    } else if (orderProp === true || orderProp === 'all') {
      breakpoints.map(breakpoint => orderClasses.push(`flex-${breakpoint}-${colOrder}`));
    } else if (Array.isArray(orderProp)) {
      orderProp.map(curOrderProp => orderClasses.push(`flex-${curOrderProp}-${colOrder}`));
    } else {
      orderClasses.push(`flex-${orderProp}-${colOrder}`);
    }
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
