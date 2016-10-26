import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.any,
  cssModule: PropTypes.object,
};

const ModalFooter = (props) => {
  const classes = mapToCssModules(classNames(
    props.className,
    'modal-footer'
  ), props.cssModule);

  return (
    <div {...props} className={classes} />
  );
};

ModalFooter.propTypes = propTypes;

export default ModalFooter;
