import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import { AccordionContext } from './AccordionContext';

const propTypes = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Render accordions edge-to-edge with their parent container */
  flush: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** The current active key that corresponds to the currently expanded card */
  open: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function that's triggered on clicking `AccordionHeader` */
  toggle: PropTypes.func.isRequired,
};

const defaultProps = {
  tag: 'div',
};

function Accordion(props) {
  const {
    flush,
    open,
    toggle,
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(className, 'accordion', {
      'accordion-flush': flush,
    }),
    cssModule,
  );

  const accordionContext = useMemo(() => ({
    open,
    toggle,
  }));

  return (
    <AccordionContext.Provider value={accordionContext}>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
