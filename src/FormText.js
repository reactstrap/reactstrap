import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'small',
};

const FormText = (props) => {
  const {
    className,
    inline,
    color,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    {
      'form-text': !inline,
      [`text-${color}`]: color,
    }
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
