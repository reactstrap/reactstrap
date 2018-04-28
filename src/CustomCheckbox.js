import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string
};

function CustomCheckbox(props) {
  const {
    id,
    description,
    ...attributes
  } = props;

  return (
    <div className="custom-control custom-checkbox">
      <input
        {...attributes}
        id={id}
        className="custom-control-input"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor={id}>{description}</label>
    </div>
  );
}

CustomCheckbox.propTypes = propTypes;

export default CustomCheckbox;
