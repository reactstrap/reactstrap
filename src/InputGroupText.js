import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

function InputGroupText(props) {
  const { className, cssModule, tag: Tag = 'span', ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'input-group-text'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

InputGroupText.propTypes = propTypes;

export default InputGroupText;
