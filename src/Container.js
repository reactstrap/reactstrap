import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {};

const Container = (props) => {
  const {
    className,
    cssModule,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  ), cssModule);

  return (
    <div {...attributes} className={classes} />
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
