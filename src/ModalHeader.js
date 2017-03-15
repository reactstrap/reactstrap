import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
};

const defaultProps = {
  tag: 'h4',
  wrapTag: 'div',
};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule);

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label="Close">
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
