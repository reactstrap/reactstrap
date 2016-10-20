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
      // show, hide, collapsing
      collapse: props.isOpen ? SHOWN : HIDDEN,
    };
    this.element = null;
  }

  componentDidMount() {

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
      setTimeout(() => {
        this.setState({ collapse: SHOWN });
      }, 350);
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ collapse: HIDE }, () => {
        this.element.style.height = `${this.getHeight()}px`;
        // force refreh
        const temp = this.element.style.height;
        this.element.style.height = '0px';
      });
      setTimeout(() => {
        this.setState({ collapse: HIDDEN });
      }, 350);
    }
    // else: do nothing.
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  render() {
    const {
      className,
      ...attributes,
    } = omit(this.props, ['isOpen']);
    let style = { height: 0 };
    let collapseClass;
    switch (this.state.collapse) {
      case SHOW:
        collapseClass = 'collapsing';
        style = { height: 0 };
        break;
      case SHOWN:
        collapseClass = 'collapse in';
        style = null;
        break;
      case HIDE:
        collapseClass = 'collapsing';
        style = { height: this.getHeight() };
        break;
      default:
      // HIDDEN
        collapseClass = 'collapse';
        style = { height: 0 };
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
