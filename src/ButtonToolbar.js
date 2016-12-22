import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
};

const defaultProps = {
  role: 'toolbar'
};

const ButtonToolbar = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar'
  ), cssModule);

  return (
    <div {...attributes} className={classes} />
  );
};

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
