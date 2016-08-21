import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'ul',
};

const Pagination = (props) => {
  const {
    className,
    size,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'pagination',
    {
      [`pagination-${size}`]: !!size,
    }
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
