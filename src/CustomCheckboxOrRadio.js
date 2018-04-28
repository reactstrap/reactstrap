import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string
};

function CustomCheckboxOrRadio(props) {
  const {
    id,
    description,
    type,
    ...attributes
  } = props;

  const className = `custom-control custom-${type}`;

  return (
    <div className={className}>
      <input
        {...attributes}
        id={id}
        type={type}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={id}>{description}</label>
    </div>
  );
}

CustomCheckboxOrRadio.propTypes = propTypes;

export default CustomCheckboxOrRadio;
