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

function FormText(props) {
  const {
    className,
    cssModule,
    inline,
    color = 'muted',
    tag: Tag = 'small',
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      !inline ? 'form-text' : false,
      color ? `text-${color}` : false,
    ),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

FormText.propTypes = propTypes;

export default FormText;
