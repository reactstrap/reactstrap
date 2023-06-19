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
  tooltip: PropTypes.bool,
};

function FormFeedback(props) {
  const {
    className,
    cssModule,
    valid = undefined,
    tooltip,
    tag: Tag = 'div',
    ...attributes
  } = props;

  const validMode = tooltip ? 'tooltip' : 'feedback';

  const classes = mapToCssModules(
    classNames(
      className,
      valid ? `valid-${validMode}` : `invalid-${validMode}`,
    ),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

FormFeedback.propTypes = propTypes;

export default FormFeedback;
