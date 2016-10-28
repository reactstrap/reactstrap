import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
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
  cssModule: PropTypes.object,
};

const defaultProps = {
  xs: 12
};

const Col = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const colClasses = [];

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

      colClasses.push(mapToCssModules(classNames({
        [colClass]: columnProp.size,
        [`push-${colSize}-${columnProp.push}`]: columnProp.push,
        [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
        [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset
      })), cssModule);
    } else {
      if (columnProp === 'auto' || columnProp === true) {
        colClass = `col-${colSize}`;
      } else {
        colClass = `col-${colSize}-${columnProp}`;
      }

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
