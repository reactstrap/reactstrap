import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import { mapToCssModules } from './utils';

const propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  defaultValue: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  defaultValue: false,
};

function ButtonToggle(props) {
  const [toggled, setToggled] = useState(props.defaultValue);
  const [focus, setFocus] = useState(false);

  const onBlur = useCallback((e) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    setFocus(false);
  }, [props.onBlur]);

  const onFocus = useCallback((e) => {
    if (props.onFocus) {
      props.onFocus(e);
    }
    setFocus(true);
  }, [props.onFocus]);

  const onClick = useCallback((e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    setToggled(!toggled);
  }, [props.onClick]);

  const {
    className,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    {
      focus: focus,
    }
  ), props.cssModule);

  return (
    <Button
      active={toggled}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={onClick}
      className={classes}
      {...attributes}
    />
  );
}

ButtonToggle.propTypes = propTypes;
ButtonToggle.defaultProps = defaultProps;

export default ButtonToggle;
