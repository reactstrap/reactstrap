import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabContext } from './TabContext';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  renderOnlyIfActive: PropTypes.bool, // If set true then tab pane is not rendered unless active. If set false (default) then tab pane is simply hidden.
  tabId: PropTypes.any,
};

const defaultProps = {
  tag: 'div',
  renderOnlyIfActive: false,
};

export default function TabPane(props) {
  const {
    className,
    cssModule,
    renderOnlyIfActive,
    tabId,
    tag: Tag,
    ...attributes
  } = props;
  const getClasses = (activeTabId) => mapToCssModules(classNames('tab-pane', className, { active: tabId === activeTabId }), cssModule);
  return (
    <TabContext.Consumer>
      {({activeTabId}) => {
        if (renderOnlyIfActive && tabId !== activeTabId) {
          return null;
        }
        return <Tag {...attributes} className={getClasses(activeTabId)} />;
      }}
    </TabContext.Consumer>
  );
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

