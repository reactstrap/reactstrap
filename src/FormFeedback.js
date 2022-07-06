import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

const defaultProps = {
  tag: 'div',
  valid: undefined
};

function FormFeedback(props) {
  const {
    className,
    cssModule,
    valid,
    tooltip,
    tag: Tag,
    ...attributes
  } = props;

  const validMode = tooltip ? 'tooltip' : 'feedback';

  const classes = mapToCssModules(
    classNames(
      className,
      valid ? `valid-${validMode}` : `invalid-${validMode}`
    ),
    cssModule
  );

  return <Tag {...attributes} className={classes} />;
}

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
