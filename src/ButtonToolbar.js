import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Aria label */
  'aria-label': PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

function ButtonToolbar(props) {
  const { className, cssModule, tag: Tag, ...attributes } = props;

  const classes = mapToCssModules(
    classNames(className, 'btn-toolbar'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
