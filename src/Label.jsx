import React, { PropTypes } from 'react';
import classNames from 'classnames';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
};

const defaultProps = {
  tag: 'label',
};

const Label = (props) => {
  const {
    className,
    hidden,
    tag: Tag,
    check,
    inline,
    size,
    for: htmlFor,
    ...attributes,
  } = props;

  const colClasses = [];

  colSizes.forEach(colSize => {
    const columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      colClasses.push(classNames({
        [`col-${colSize}-${columnProp.size}`]: columnProp.size,
        [`push-${colSize}-${columnProp.push}`]: columnProp.push,
        [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
        [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset,
      }));
    } else if (columnProp) {
      colClasses.push(`col-${colSize}-${columnProp}`);
    }
  });

  const classes = classNames(
    className,
    hidden ? 'sr-only' : false,
    check ? `form-check-${inline ? 'inline' : 'label'}` : false,
    size ? `col-form-label-${size}` : false,
    colClasses,
    colClasses.length ? 'col-form-label' : false
  );

  return (
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
