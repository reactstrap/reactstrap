import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'h3'
};

function PopoverHeader(props) {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
}

PopoverHeader.propTypes = propTypes;
PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
