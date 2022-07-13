import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Set item as active */
  active: PropTypes.bool,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set item as disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

function PaginationItem(props) {
  const {
    active,
    className,
    cssModule,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'page-item', {
      active,
      disabled,
    }),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
