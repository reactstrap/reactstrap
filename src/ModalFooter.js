import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const ModalFooter = (props) => {
  const {
    className,
    cssModule,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-footer'
  ), cssModule);

  return (
    <div {...attributes} className={classes} />
  );
};

ModalFooter.propTypes = propTypes;

export default ModalFooter;
