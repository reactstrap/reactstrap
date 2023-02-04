import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'p',
};

const CardText = React.forwardRef((props, ref) => {
  const { className, cssModule, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-text'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={ref}/>;
})

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;
CardText.displayName = 'CardText';

export default CardText;
