import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  icon: PropTypes.string,
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object,
};

const defaultProps = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'mr-auto',
  closeAriaLabel: 'Close',
  charCode: 215,
};

const ToastHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    charCode,
    close,
    tagClassName,
    icon,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'toast-header'
  ), cssModule);

  if (!close && toggle) {
    const closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = (
      <button type="button" onClick={toggle} className={mapToCssModules('close', cssModule)} aria-label={closeAriaLabel}>
        <span aria-hidden="true">{closeIcon}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      {icon && (
        <svg
          className={mapToCssModules(
            `rounded mr-2 text-${icon === true ? 'primary' : icon}`
          )}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"><rect fill="currentColor" width="100%" height="100%"></rect></svg>
      )}
      <Tag className={mapToCssModules(tagClassName, cssModule)}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
};

ToastHeader.propTypes = propTypes;
ToastHeader.defaultProps = defaultProps;

export default ToastHeader;
