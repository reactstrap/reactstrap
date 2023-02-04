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

const defaultProps = {
  'aria-label': 'close',
};

const CloseButton = React.forwardRef((props, ref) => {
  const { className, cssModule, variant, innerRef = ref, ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'btn-close', variant && `btn-close-${variant}`),
  );

  return (
    <button ref={innerRef} type="button" className={classes} {...attributes} />
  );
});

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
