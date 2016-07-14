import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'ul'
};

const ListGroup = (props) => {
  const {
    className,
    tag: Tag,
    flush,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group',
    flush ? 'list-group-flush' : false,
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
