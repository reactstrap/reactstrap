import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  onClick: PropTypes.func,
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
  'aria-label': 'close'
};

function CloseButton(props) {
  const {
    className,
    cssModule,
    variant,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-close',
    variant && `btn-close-${variant}`
  ));

  return (
    <button
      ref={innerRef}
      type="button"
      className={classes}
      {...attributes}
    />
  );
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
