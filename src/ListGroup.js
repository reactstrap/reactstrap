import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  numbered: PropTypes.bool
};

const defaultProps = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

const getHorizontalClass = horizontal => {
  if (horizontal === false) {
    return false;
  } else if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }
  return `list-group-horizontal-${horizontal}`;
};

const ListGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    flush,
    horizontal,
    numbered,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group',
    // list-group-horizontal cannot currently be mixed with list-group-flush
    // we only try to apply horizontal classes if flush is false
    flush ? 'list-group-flush' : getHorizontalClass(horizontal),
    {
      'list-group-numbered': numbered
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
