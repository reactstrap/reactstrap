import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

const ModalFooter = (props) => {
  const classes = classNames(
    props.className,
    'modal-footer'
  );

  return (
    <div {...props} className={classes} />
  );
};

ModalFooter.propTypes = propTypes;

export default ModalFooter;
