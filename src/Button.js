import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import CloseButton from './CloseButton';

const propTypes = {
  /** Manually set the visual state of the button to active */
  active: PropTypes.bool,
  /** Aria label */
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Use the button as a close button */
  close: PropTypes.bool,
  /** Change color of Button to one of the available colors */
  color: PropTypes.string,
  /** Disables the button */
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Adds outline to the button */
  outline: PropTypes.bool,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  color: 'secondary',
  tag: 'button',
};

function Button(props) {
  const onClick = useCallback((e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      return props.onClick(e);
    }
  }, [props.onClick, props.disabled]);

  let {
    active,
    'aria-label': ariaLabel,
    block,
    className,
    close,
    cssModule,
    color,
    outline,
    size,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;

  if (close) {
    return (
      <CloseButton
        {...attributes}
      />
    );
  }

  const btnOutlineColor = `btn${outline ? '-outline' : ''}-${color}`;

  const classes = mapToCssModules(classNames(
    className,
    'btn',
    btnOutlineColor,
    size ? `btn-${size}` : false,
    block ? 'd-block w-100' : false,
    { active, disabled: props.disabled }
  ), cssModule);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return (
    <Tag
      type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
      {...attributes}
      className={classes}
      ref={innerRef}
      onClick={onClick}
      aria-label={ariaLabel}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
