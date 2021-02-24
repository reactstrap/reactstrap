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
};

const defaultProps = {
  tag: 'div'
};

const UncntrolledAccordion = (props) => {
  const [openId, setOpenId] = useState();
  const toggle = (id) => {
    openId === id ? setOpenId(undefined) : setOpenId(id);
  };

  return <Accordion {...props} openId={openId} toggle={toggle} />;
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default UncntrolledAccordion;
