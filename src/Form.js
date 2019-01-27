import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'form',
};

const Form = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    inline,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    inline ? 'form-inline' : false
  ), cssModule);

  return (
    <Tag {...attributes} ref={ref} className={classes} />
  );
});

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
