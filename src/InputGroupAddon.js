import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import InputGroupText from './InputGroupText';

const propTypes = {
  tag: tagPropType,
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const InputGroupAddon = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    addonType,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return (
      <Tag {...attributes} className={classes} ref={ref}>
        <InputGroupText children={children} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} children={children} ref={ref} />
  );
});

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
