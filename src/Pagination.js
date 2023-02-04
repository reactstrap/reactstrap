import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Add custom class for list */
  listClassName: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Make the Pagination bigger or smaller  */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Set a custom element for list component */
  listTag: tagPropType,
  'aria-label': PropTypes.string,
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination',
};

// TODO: What should we assign ref to here? We can decide later.
const Pagination = React.forwardRef((props, ref) => {
  const {
    className,
    listClassName,
    cssModule,
    size,
    tag: Tag,
    listTag: ListTag,
    'aria-label': label,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(className), cssModule);

  const listClasses = mapToCssModules(
    classNames(listClassName, 'pagination', {
      [`pagination-${size}`]: !!size,
    }),
    cssModule,
  );

  return (
    <Tag className={classes} aria-label={label}>
      <ListTag {...attributes} className={listClasses} />
    </Tag>
  );
});

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
Pagination.displayName = 'Pagination';

export default Pagination;
