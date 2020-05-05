import React, { Component } from 'react';
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


class TabContent extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
    } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = mapToCssModules(classNames('tab-content', className), cssModule);

    return (
      <TabContext.Provider value={{activeTabId: this.state.activeTab}}>
        <Tag {...attributes} className={classes} />
      </TabContext.Provider>
    );
  }
}

export default TabContent;

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

