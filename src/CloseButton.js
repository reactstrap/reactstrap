import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /** Disable the button if needed */
  active: PropTypes.bool,
  /** Aria label */
  'aria-label': PropTypes.string,
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Change the variant to white */
  variant: PropTypes.oneOf(['white']),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

function CloseButton(props) {
  const { className, cssModule, variant, innerRef, ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'btn-close', variant && `btn-close-${variant}`),
  );

  return (
    <button
      ref={innerRef}
      type="button"
      className={classes}
      {...{ 'aria-label': 'close', ...attributes }}
    />
  );
}

CloseButton.propTypes = propTypes;

export default CloseButton;
