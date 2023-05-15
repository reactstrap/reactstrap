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

function CardLink(props) {
  const {
    className,
    cssModule,
    tag: Tag = 'a',
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(className, 'card-link'),
    cssModule,
  );

  return <Tag {...attributes} ref={innerRef} className={classes} />;
}

CardLink.propTypes = propTypes;

export default CardLink;
