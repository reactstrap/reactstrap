import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'a',
};

const CardLink = React.forwardRef((props, ref) => {
  const { className, cssModule, tag: Tag, innerRef = ref, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-link'),
    cssModule,
  );

  return <Tag {...attributes} ref={innerRef} className={classes} />;
})

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
