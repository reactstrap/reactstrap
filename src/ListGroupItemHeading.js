import React from 'react';
import classNames from 'classnames';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'h5'
};

const ListGroupItemHeading = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-heading'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemHeading.propTypes = propTypes;
ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
