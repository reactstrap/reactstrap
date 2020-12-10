import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

const defaultProps ={
  tag: 'li'
};

const ListInlineItem = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-inline-item'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
};

ListInlineItem.propTypes = propTypes;
ListInlineItem.defaultProps = defaultProps;

export default ListInlineItem;
