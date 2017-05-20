import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { mapToCssModules } from './utils';

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
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.childContextTypes = childContextTypes;
