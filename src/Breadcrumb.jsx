import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'ol'
};

const Breadcrumb = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'breadcrumb'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
