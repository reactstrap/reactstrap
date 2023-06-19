import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add to next button to add default aria label and icon */
  next: PropTypes.bool,
  /** Add to previous button to add default aria label and icon */
  previous: PropTypes.bool,
  /** Add to first button to add default aria label and icon */
  first: PropTypes.bool,
  /** Add to last button to add default aria label and icon */
  last: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

function PaginationLink(props) {
  let {
    className,
    cssModule,
    next,
    previous,
    first,
    last,
    tag: Tag = 'a',
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'page-link'),
    cssModule,
  );

  let defaultAriaLabel;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  const ariaLabel = props['aria-label'] || defaultAriaLabel;

  let defaultCaret;
  if (previous) {
    defaultCaret = '\u2039';
  } else if (next) {
    defaultCaret = '\u203A';
  } else if (first) {
    defaultCaret = '\u00ab';
  } else if (last) {
    defaultCaret = '\u00bb';
  }

  let { children } = props;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [
      <span aria-hidden="true" key="caret">
        {children || defaultCaret}
      </span>,
      <span className="visually-hidden" key="ariaLabel">
        {ariaLabel}
      </span>,
    ];
  }

  return (
    <Tag {...attributes} className={classes} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}

PaginationLink.propTypes = propTypes;

export default PaginationLink;
