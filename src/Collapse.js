import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const SHOW = 'SHOW';
const COLLAPSING = 'COLLAPSING';
const HIDE = 'HIDE';

const propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.node
};

const defaultProps = { isOpen: false };

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show, hide, collapsing
      collapse: HIDE,
    };
  }
  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;
    if (willOpen && collapse === HIDE) {
      // will open
      this.setState({ collapse: COLLAPSING });
      setTimeout(() => {
        this.setState({ collapse: SHOW });
      }, 350);
    } else if (!willOpen && collapse === SHOW) {
      // will hide
      this.setState({ collapse: COLLAPSING });
      setTimeout(() => {
        this.setState({ collapse: HIDE });
      }, 350);
    }
    // else: do nothing.
  }
  render() {
    const {
      className,
      ...attributes,
    } = this.props;

    let collapseClass;
    switch (this.state.collapse) {
      case SHOW:
        collapseClass = 'collapse in';
        break;
      case COLLAPSING:
        collapseClass = 'collapsing';
        break;
      default:
        collapseClass = 'collapse';
    }

    const classes = classNames(
      className,
      collapseClass
    );
    return (
      <div {...attributes} className={classes} />
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
