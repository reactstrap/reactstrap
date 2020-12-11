import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const defaultProps = {
  tag: 'div'
};

const Accordion = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'accordion',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
