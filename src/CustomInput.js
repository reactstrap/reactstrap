import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ])
};

function CustomInput(props) {
  const {
    className,
    label,
    inline,
    valid,
    invalid,
    cssModule,
    children,
    bsSize,
    innerRef,
    ...attributes
  } = props;

  const type = attributes.type;

  const customClass = mapToCssModules(classNames(
    className,
    `custom-${type}`,
    bsSize ? `custom-${type}-${bsSize}` : false,
  ), cssModule);

  const validationClassNames = mapToCssModules(classNames(
    invalid && 'is-invalid',
    valid && 'is-valid',
  ), cssModule);

  if (type === 'select') {
    return <select {...attributes} ref={innerRef} className={classNames(validationClassNames, customClass)}>{children}</select>;
  }

  if (type === 'file') {
    return (
      <div className={customClass}>
        <input {...attributes} ref={innerRef} className={classNames(validationClassNames, mapToCssModules('custom-file-input', cssModule))} />
        <label className={mapToCssModules('custom-file-label', cssModule)} htmlFor={attributes.id}>{label || 'Choose file'}</label>
      </div>
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return <input {...attributes} ref={innerRef} className={classNames(validationClassNames, customClass)} />;
  }

  const wrapperClasses = classNames(
    customClass,
    mapToCssModules(classNames(
      'custom-control',
      { 'custom-control-inline': inline }
    ), cssModule)
  );

  return (
    <div className={wrapperClasses}>
      <input
        {...attributes}
        ref={innerRef}
        className={classNames(validationClassNames, mapToCssModules('custom-control-input', cssModule))}
      />
      <label className={mapToCssModules('custom-control-label', cssModule)} htmlFor={attributes.id}>{label}</label>
      {children}
    </div>
  );
}

CustomInput.propTypes = propTypes;

export default CustomInput;
