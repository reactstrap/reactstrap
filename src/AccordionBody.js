import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Collapse from './Collapse';
import { AccordionContext } from './AccordionContext';

const propTypes = {
  /** Unique key used to control item's collapse/expand */
  accordionId: PropTypes.string.isRequired,
  /** To add custom class */
  className: PropTypes.string,
  children: PropTypes.node,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  /** Pass ref to the component */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'div',
};

function AccordionBody(props) {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    children,
    accordionId,
    ...attributes
  } = props;

  const { open } = useContext(AccordionContext);

  const classes = mapToCssModules(
    classNames(className, 'accordion-collapse'),
    cssModule,
  );

  return (
    <Collapse
      {...attributes}
      className={classes}
      ref={innerRef}
      isOpen={
        Array.isArray(open) ? open.includes(accordionId) : open === accordionId
      }
    >
      <Tag className="accordion-body">{children}</Tag>
    </Collapse>
  );
}

AccordionBody.propTypes = propTypes;
AccordionBody.defaultProps = defaultProps;

export default AccordionBody;
