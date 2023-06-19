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

function ToastBody(props) {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag = 'div',
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(className, 'toast-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
}

ToastBody.propTypes = propTypes;

export default ToastBody;
