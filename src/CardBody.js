import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'div',
};

const CardBody = React.forwardRef((props, ref) => {
  const { className, cssModule, innerRef = ref, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
});

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
