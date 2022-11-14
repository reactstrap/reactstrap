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

const defaultProps = {
  tag: 'div',
};

const UncontrolledAccordion = React.forwardRef((props, ref) => {
  const { defaultOpen, stayOpen, innerRef = ref, ...restProps } = props;
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

  return <Accordion {...restProps} open={open} toggle={toggle} ref={innerRef} />;
})

UncontrolledAccordion.propTypes = propTypes;
UncontrolledAccordion.defaultProps = defaultProps;

export default UncontrolledAccordion;
