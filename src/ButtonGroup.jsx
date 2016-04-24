import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

const defaultProps = {
  role: 'group'
};

const ButtonGroup = (props) => {
  const {
    className,
    size,
    vertical,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  );

  return (
    <div {...attributes} className={classes} />
  );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
