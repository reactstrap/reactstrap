import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul'
};

const ListGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    flush,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group',
    flush ? 'list-group-flush' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
