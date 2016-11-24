import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const ModalBody = (props) => {
  const classes = mapToCssModules(classNames(
    props.className,
    'modal-body'
  ), props.cssModule);

  return (
    <div {...props} className={classes} />
  );
};

ModalBody.propTypes = propTypes;

export default ModalBody;
