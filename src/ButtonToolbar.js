import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

function ButtonToolbar(props) {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
}

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
