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
  tag: 'div',
};

const Container = (props) => {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
