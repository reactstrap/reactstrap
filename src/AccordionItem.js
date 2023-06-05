import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  /** To add custom class */
  className: PropTypes.string,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** Set a custom element for this component */
  tag: tagPropType,
};

function AccordionItem(props) {
  const {
    className,
    cssModule,
    tag: Tag = 'div',
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(className, 'accordion-item'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
}

AccordionItem.propTypes = propTypes;

export default AccordionItem;
