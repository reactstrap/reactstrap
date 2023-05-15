import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Custom close button */
  close: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function to be triggered when close button is clicked */
  toggle: PropTypes.func,
  wrapTag: tagPropType,
};

function ModalHeader(props) {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag = 'h5',
    wrapTag: WrapTag = 'div',
    closeAriaLabel = 'Close',
    close,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'modal-header'),
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
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
}

ModalHeader.propTypes = propTypes;

export default ModalHeader;
