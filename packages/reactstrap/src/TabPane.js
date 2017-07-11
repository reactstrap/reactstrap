import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any,
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  activeTabId: PropTypes.any
};

export default function TabPane(props, context) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
  return (
    <Tag {...attributes} className={classes} />
  );
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;
TabPane.contextTypes = contextTypes;
