import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'p'
};

const ListGroupItemText = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group-item-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemText.propTypes = propTypes;
ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
