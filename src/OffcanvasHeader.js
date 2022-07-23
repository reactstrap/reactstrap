import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  tag: tagPropType,
  toggle: PropTypes.func,
  wrapTag: tagPropType,
};

const defaultProps = {
  closeAriaLabel: 'Close',
  tag: 'h5',
  wrapTag: 'div',
};

function OffcanvasHeader(props) {
  let closeButton;
  const {
    children,
    className,
    close,
    closeAriaLabel,
    cssModule,
    tag: Tag,
    toggle,
    wrapTag: WrapTag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'offcanvas-header'),
    cssModule,
  );

  if (!close && toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className={mapToCssModules('btn-close', cssModule)}
        aria-label={closeAriaLabel}
      />
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('offcanvas-title', cssModule)}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
}

OffcanvasHeader.propTypes = propTypes;
OffcanvasHeader.defaultProps = defaultProps;

export default OffcanvasHeader;
