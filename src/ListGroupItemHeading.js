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
  tag: 'h5'
};

const ListGroupItemHeading = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group-item-heading'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemHeading.propTypes = propTypes;
ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
