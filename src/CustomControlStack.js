/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Checkbox = (props) => {
  const {
    className,
    name,
    description,
    getRef,
    disabled,
    ...attributes,
  } = props;

  return (
    <label className={className}>
      <input {...attributes} type="checkbox" className="custom-control-input" name={name} ref={getRef} disabled={disabled} />
      <span className="custom-control-indicator"></span>
      {description && (<span className="custom-control-description">{description}</span>)}
    </label>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  description: false
};


export const Radio = (props) => {
  const {
    className,
    name,
    description,
    getRef,
    disabled,
    ...attributes,
  } = props;

  return (
    <label className={className}>
      <input {...attributes} type="radio" className="custom-control-input" name={name} ref={getRef} disabled={disabled} />
      <span className="custom-control-indicator"></span>
      {description && (<span className="custom-control-description">{description}</span>)}
    </label>
  );
}

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  description: false
};

export const Stacked = (props) => {
  const {
    children,
    className,
    ...attributes,
  } = props;

  return (
    <div className="custom-controls-stacked">
      {children}
    </div>
  );
}

Stacked.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Stacked.defaultProps = {};

export const Select = (props) => {
  const {
    children,
    className,
    getRef,
    disabled,
    ...attributes,
  } = props;

  return (
    <select {...attributes} className={className} ref={getRef} disabled={disabled} >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false
};

export const File = (props) => {
  const {
    children,
    className,
    getRef,
    disabled,
    lang,
    ...attributes,
  } = props;

  return (
    <label className={className}>
      <input {...attributes} type="file" className="custom-file-input" disabled={disabled} />
      <span className="custom-file-control" lang={lang}></span>
    </label>
  );
}

File.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  lang: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

File.defaultProps = {
  lang: 'en',
  disabled: false,
};
