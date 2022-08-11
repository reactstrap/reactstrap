import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: PropTypes.bool,
  /** Add custom class to the element */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

function BreadcrumbItem(props) {
  const { className, cssModule, active, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, active ? 'active' : false, 'breadcrumb-item'),
    cssModule,
  );

  return (
    <Tag
      {...attributes}
      className={classes}
      aria-current={active ? 'page' : undefined}
    />
  );
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
