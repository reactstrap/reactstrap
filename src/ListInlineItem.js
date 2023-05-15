import React, { forwardRef } from 'react';
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

const ListInlineItem = forwardRef((props, ref) => {
  const { className, cssModule, tag: Tag = 'li', ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'list-inline-item'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={ref} />;
});

ListInlineItem.name = 'ListInlineItem';
ListInlineItem.propTypes = propTypes;

export default ListInlineItem;
