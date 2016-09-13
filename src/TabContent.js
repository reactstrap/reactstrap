import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.any,
  className: PropTypes.string
};

const childContextTypes = {
  activeTabId: PropTypes.any
};

export default class TabContent extends Component {
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
  componentWillReceiveProps(nextProps) {
    if (this.state.activeTab !== nextProps.activeTab) {
      this.setState({
        activeTab: nextProps.activeTab
      });
    }
  }
  render() {
    const classes = classnames('tab-content', this.props.className);
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
TabContent.propTypes = propTypes;
TabContent.childContextTypes = childContextTypes;
