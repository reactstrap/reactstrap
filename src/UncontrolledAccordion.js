import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';
import Accordion from './Accordion';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  defaultOpen: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  stayOpen: PropTypes.bool,
};

function UncontrolledAccordion({ defaultOpen, stayOpen, ...props }) {
  const [open, setOpen] = useState(defaultOpen || (stayOpen ? [] : undefined));
  const toggle = (id) => {
    if (stayOpen) {
      if (open.includes(id)) {
        setOpen(open.filter((accordionId) => accordionId !== id));
      } else {
        setOpen([...open, id]);
      }
    } else if (open === id) {
      setOpen(undefined);
    } else {
      setOpen(id);
    }
  };

  return (
    <Accordion {...{ tag: 'div', ...props }} open={open} toggle={toggle} />
  );
}

UncontrolledAccordion.propTypes = propTypes;

export default UncontrolledAccordion;
