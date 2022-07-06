import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import CloseButton from './CloseButton';

const propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool,
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
