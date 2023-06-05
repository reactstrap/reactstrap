import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabContext } from './TabContext';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any,
};

export default function TabPane(props) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag = 'div',
    ...attributes
  } = props;
  const getClasses = (activeTabId) =>
    mapToCssModules(
      classNames('tab-pane', className, { active: tabId === activeTabId }),
      cssModule,
    );
  return (
    <TabContext.Consumer>
      {({ activeTabId }) => (
        <Tag {...attributes} className={getClasses(activeTabId)} />
      )}
    </TabContext.Consumer>
  );
}
TabPane.propTypes = propTypes;
