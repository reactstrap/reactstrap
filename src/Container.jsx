import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.node
};

const defaultProps = {};

const Container = (props) => {
  const {
    className,
    fluid,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  );

  return (
    <div {...attributes} className={classes} />
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
