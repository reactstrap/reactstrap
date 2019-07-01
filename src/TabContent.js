import React, { Component, useState } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabContext } from './TabContext';
import { mapToCssModules, omit, tagPropType } from './utils';


const propTypes = {
  tag: tagPropType,
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};


const TabContent = props => {
    const {
      className,
      cssModule,
      tag: Tag,
      activeTab: initialActiveTab,
    } = props;

    const attributes = omit(props, Object.keys(propTypes));

    const classes = mapToCssModules(classNames('tab-content', className), cssModule);

    const [activeTab, setActiveTab] = useState(initialActiveTab);

    return (
      <TabContext.Provider value={{activeTabId: activeTab}}>
        <Tag {...attributes} className={classes} />
      </TabContext.Provider>
    );

}

export default TabContent;

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

