import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'li',
};

const PaginationItem = (props) => {
  const {
    active,
    className,
    disabled,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
