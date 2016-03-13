import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

const ModalBody = (props) => {
  const classes = classNames(
    props.className,
    'modal-body'
  );

  return (
    <div {...props} className={classes} />
  );
};

ModalBody.propTypes = propTypes;

export default ModalBody;
