import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const Jumbotron = (props) => {
  const {
    className,
    tag: Tag,
    fluid,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
