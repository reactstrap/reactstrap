import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const rowColsProps = ['colsXs', 'colsSm', 'colsMd', 'colsLg', 'colsXl'];
const rowColsPropsWidthMapping = ['xs', 'sm', 'md', 'lg', 'xl'];
const rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const propTypes = {
  tag: tagPropType,
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool,
  colsXs: rowColsPropType,
  colsSm: rowColsPropType,
  colsMd: rowColsPropType,
  colsLg: rowColsPropType,
  colsXl: rowColsPropType
};

const defaultProps = {
  tag: 'div',
  widths: rowColsProps
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

    if (!colSize || colSize === '') {
      return;
    }

    const isXs = !i;
    colClasses.push(isXs ? `row-cols-${colSize}` : `row-cols-${rowColsPropsWidthMapping[i]}-${colSize}`);
  });

  const classes = mapToCssModules(classNames(
    className,
    noGutters ? 'no-gutters' : null,
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
