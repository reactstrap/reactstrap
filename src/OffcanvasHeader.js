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

function OffcanvasHeader(props) {
  let closeButton;
  const {
    children,
    className,
    close,
    closeAriaLabel = 'Close',
    cssModule,
    tag: Tag = 'h5',
    toggle,
    wrapTag: WrapTag = 'div',
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

export default OffcanvasHeader;
