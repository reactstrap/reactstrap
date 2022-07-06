import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

function PaginationItem(props) {
  const {
    active,
    className,
    cssModule,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
}

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
