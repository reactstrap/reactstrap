import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.string,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'li'
};

const BreadcrumbItem = (props) => {
  const {
    className,
    active,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
