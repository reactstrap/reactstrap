import React, { PropTypes, Component } from 'react';

const propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.any,
  className: PropTypes.string
};

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.childRefs = {};
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  componentDidMount() {
    let childRefs = Object.keys(this.childRefs);
    if (!childRefs.length) {
      return;
    }
    childRefs.forEach(childRef => {
      this.childRefs[childRef].setAttribute('hidden', true);
    });
    if (typeof this.state.activeTab === 'undefined') {
      childRefs[0].removeAttribute('hidden');
    } else {
      this.childRefs[this.state.activeTab].removeAttribute('hidden');
    }
    /*
      FIXME: Avoid hiding and showing the parent container for all tabs.

      Initially when the tab component is loaded in UI there is a brief
      amount of time where all the tabs are visible after which componentDidMount
      is triggered which hides non-active tabs. In order to avoid that we are hiding
      the entire container and showing it when we decide on active tab.
    */
    this.containerElement.removeAttribute('hidden');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeTab: nextProps.activeTab
    });
  }
  componentDidUpdate() {
    let childRefs = Object.keys(this.childRefs);
    if (!childRefs.length) {
      return;
    }
    let clickedChild = childRefs.filter(childRef => childRef === this.state.activeTab);
    childRefs.forEach(ref => {
      this.childRefs[ref].setAttribute('hidden', true);
    });
    this.childRefs[clickedChild[0]].removeAttribute('hidden');
  }
  render() {
    return (
      <div
        className={this.props.className}
        ref={(containerElement) => { this.containerElement = containerElement; }}
        hidden
      >
        {
          React.Children.map(this.props.children, (child) => {
            return (
              <div
                className="tab-content-wrapper"
                ref={(ref) => { this.childRefs[child.props.tabId] = ref; }}
              >
                {child}
              </div>
            );
          }, this)
        }
      </div>
    );
  }
}
TabContent.propTypes = propTypes;
