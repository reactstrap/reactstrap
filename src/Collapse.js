import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';

const propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.node
};

const defaultProps = { isOpen: false };

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: props.isOpen ? SHOWN : HIDDEN,
    };
    this.element = null;
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // start transition
        this.element.style.height = `${this.getHeight()}px`;
      });
      this.transitionTag = setTimeout(() => {
        this.setState({ collapse: SHOWN });
      }, 350);
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ collapse: HIDE }, () => {
        this.element.style.height = `${this.getHeight()}px`;
        // force refresh
        const temp = this.element.style.height;
        this.element.style.height = '0px';
      });
      this.transitionTag = setTimeout(() => {
        this.setState({ collapse: HIDDEN });
      }, 350);
    }
    // else: do nothing.
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  render() {
    const {
      className,
      ...attributes,
    } = omit(this.props, ['isOpen']);
    let collapseClass;
    switch (this.state.collapse) {
      case SHOW:
        collapseClass = 'collapsing';
        break;
      case SHOWN:
        collapseClass = 'collapse in';
        break;
      case HIDE:
        collapseClass = 'collapsing';
        break;
      default:
      // HIDDEN
        collapseClass = 'collapse';
    }

    const classes = classNames(
      className,
      collapseClass
    );
    return (
      <div
        {...attributes}
        className={classes}
        ref={(c) => { this.element = c; }}
      />
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
