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
  /** Type of list `unstyled` or `inline` */
  type: PropTypes.string,
};

const List = forwardRef((props, ref) => {
  const { className, cssModule, tag: Tag = 'ul', type, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, type ? `list-${type}` : false),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={ref} />;
});

List.name = 'List';
List.propTypes = propTypes;

export default List;
