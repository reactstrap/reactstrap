import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Aria label */
  'aria-label': PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Make button group vertical */
  vertical: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  role: 'group',
};

function ButtonGroup(props) {
  const {
    className,
    cssModule,
    size,
    vertical,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      size ? 'btn-group-' + size : false,
      vertical ? 'btn-group-vertical' : 'btn-group',
    ),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
