import React, { Component } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';


const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const childContextTypes = {
  activeTabId: PropTypes.any
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
  getChildContext() {
    return {
      activeTabId: this.state.activeTab
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
      <Tag {...attributes} className={classes} />
    );
  }
}

polyfill(TabContent);
export default TabContent;

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.childContextTypes = childContextTypes;
