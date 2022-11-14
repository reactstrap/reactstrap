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

const defaultProps = {
  tag: 'div',
};

const ToastBody = React.forwardRef((props, ref) => {
  const { className, cssModule, innerRef = ref, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'toast-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
});

ToastBody.propTypes = propTypes;
ToastBody.defaultProps = defaultProps;

export default ToastBody;
