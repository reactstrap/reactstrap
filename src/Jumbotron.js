import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const Jumbotron = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
