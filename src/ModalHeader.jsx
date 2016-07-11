import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  toggle: PropTypes.func,
  className: PropTypes.any,
  children: PropTypes.node
};

const defaultProps = {};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    children,
    toggle,
    ...attributes } = props;

  const classes = classNames(
    className,
    'modal-header'
  );

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label="Close">
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <div {...attributes} className={classes}>
      {closeButton}
      <h4 className="modal-title">
        {children}
      </h4>
    </div>
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
