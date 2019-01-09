import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'small',
  color: 'muted',
};

const FormText = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    inline,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
