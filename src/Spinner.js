import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /**
   * Set a custom element for this component
   */
  tag: tagPropType,
  /**
   * Change animation of spinner
   */
  type: PropTypes.oneOf(['border', 'grow']),
  /**
   * Change size of spinner
   */
  size: PropTypes.string,
  /**
   * Change color of spinner
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /**
   * Add custom class
   */
  className: PropTypes.string,
  /**
   * Change existing className with a new className
   */
  cssModule: PropTypes.object,
  /**
   * Pass children so this component can wrap the child elements
   */
  children: PropTypes.string
};

const defaultProps = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

const Spinner = props => {
  const {
    className,
    cssModule,
    type,
    size,
    color,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      size ? `spinner-${type}-${size}` : false,
      `spinner-${type}`,
      color ? `text-${color}` : false
    ),
    cssModule
  );

  return (
    <Tag role="status" {...attributes} className={classes}>
      {children &&
        <span className={mapToCssModules('visually-hidden', cssModule)}>
          {children}
        </span>
      }
    </Tag>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
