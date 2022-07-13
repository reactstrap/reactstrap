import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Aria label */
  'aria-label': PropTypes.string,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Add custom class to list tag */
  listClassName: PropTypes.string,
  /** Set a custom element for list tag */
  listTag: tagPropType,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb',
};

function Breadcrumb(props) {
  const {
    className,
    listClassName,
    cssModule,
    children,
    tag: Tag,
    listTag: ListTag,
    'aria-label': label,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(className), cssModule);

  const listClasses = mapToCssModules(
    classNames('breadcrumb', listClassName),
    cssModule,
  );

  return (
    <Tag {...attributes} className={classes} aria-label={label}>
      <ListTag className={listClasses}>{children}</ListTag>
    </Tag>
  );
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
