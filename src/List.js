import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

const defaultProps ={
  tag: 'ul'
};

const List = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    type ? `list-${type}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
