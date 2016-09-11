
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

export default function TabPane({ className, tabId, children }, context) {
  return (
    <div className={classnames('tab-pane', className, { active: tabId === context.activeTabId })}>
      {children}
    </div>
  );
}
TabPane.propTypes = propTypes;
TabPane.contextTypes = contextTypes;
