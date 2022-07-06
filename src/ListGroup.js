import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Remove borders to make the list appear flush */
  flush: PropTypes.bool,
  /** Make the list horizontal instead of vertical */
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Add number to the ListItems */
  numbered: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

const getHorizontalClass = (horizontal) => {
  if (horizontal === false) {
    return false;
  } if (horizontal === true || horizontal === 'xs') {
    return 'list-group-horizontal';
  }
  return `list-group-horizontal-${horizontal}`;
};

function ListGroup(props) {
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
}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
