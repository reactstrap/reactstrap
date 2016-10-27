
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  cssModule: PropTypes.object,
  tabId: PropTypes.any,
};
const contextTypes = {
  activeTabId: PropTypes.any
};

export default function TabPane(props, context) {
  const {
    className,
    cssModule,
    tabId,
    children,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
}
TabPane.propTypes = propTypes;
TabPane.contextTypes = contextTypes;
