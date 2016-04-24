import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string
};

const defaultProps = {
  role: 'toolbar'
};

const ButtonToolbar = (props) => {
  const {
    className,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'btn-toolbar'
  );

  return (
    <div {...attributes} className={classes} />
  );
};

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
