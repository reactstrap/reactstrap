import React from 'react';
import classNames from 'classnames';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'p'
};

const ListGroupItemText = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-text'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemText.propTypes = propTypes;
ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
