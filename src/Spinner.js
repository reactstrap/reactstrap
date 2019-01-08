import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string
};

const defaultProps = {
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
    <div role="status" {...attributes} className={classes}>
      {children &&
        <span className={mapToCssModules('sr-only', cssModule)}>
         {children}
        </span>
      }
    </div>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
