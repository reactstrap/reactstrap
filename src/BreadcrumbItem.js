import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li'
};

function BreadcrumbItem(props) {
  const {
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} aria-current={active ? 'page' : undefined} />
  );
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
