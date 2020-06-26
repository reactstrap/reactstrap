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
  tag: 'div'
};

const PopoverBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverBody.propTypes = propTypes;
PopoverBody.defaultProps = defaultProps;

export default PopoverBody;
