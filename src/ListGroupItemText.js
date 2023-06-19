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

function ListGroupItemText(props) {
  const { className, cssModule, tag: Tag = 'p', ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'list-group-item-text'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

ListGroupItemText.propTypes = propTypes;

export default ListGroupItemText;
