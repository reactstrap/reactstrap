
import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabId: PropTypes.any
};
const contextTypes = {
  activeTabId: PropTypes.any
};

export default function TabPane(props, context) {
  const {
    className,
    tabId,
    children,
    ...attributes
  } = props;
  const classes = classnames('tab-pane', className, { active: tabId === context.activeTabId });
  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
}
TabPane.propTypes = propTypes;
TabPane.contextTypes = contextTypes;
