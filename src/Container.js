import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

function Container(props) {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag,
    ...attributes
  } = props;

  let containerClass = 'container';
  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = `container-${fluid}`;
  }

  const classes = mapToCssModules(classNames(
    className,
    containerClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
