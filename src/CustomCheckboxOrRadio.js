import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  inline: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.array, PropTypes.func)
};

function CustomCheckboxOrRadio(props) {
  const {
    className,
    id,
    description,
    type,
    inline,
    cssModule,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'custom-control',
    `custom-${type}`,
    { 'custom-control-inline': inline }
  ), cssModule);

  return (
    <div className={classes}>
      <input
        {...attributes}
        id={id}
        type={type}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={id}>{description}</label>
      {children}
    </div>
  );
}

CustomCheckboxOrRadio.propTypes = propTypes;

export default CustomCheckboxOrRadio;
