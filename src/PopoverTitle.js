import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'h3'
};

const PopoverTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-title'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverTitle.propTypes = propTypes;
PopoverTitle.defaultProps = defaultProps;

export default PopoverTitle;
