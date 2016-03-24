import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  toggle: PropTypes.func
};

const defaultProps = {};

class ModalHeader extends React.Component {
  render() {
    let closeButton;
    const {
      className,
      children,
      toggle,
      ...props } = this.props;

    const classes = classNames(
      className,
      'modal-header'
    );

    if (toggle) {
      closeButton = (
        <button type="button" onClick={toggle} className="close" dataDismiss="modal" ariaLabel="Close">
          <span ariaHidden="true">{String.fromCharCode(215)}</span>
        </button>
      );
    }

    return (
      <div {...props} className={classes}>
        { closeButton }
        <h4 className="modal-title">
          { children }
        </h4>
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
