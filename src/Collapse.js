import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { mapToCssModules } from './utils';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';

const propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  cssModule: PropTypes.object,
  navbar: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
  tag: 'div'
};

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: props.isOpen ? SHOWN : HIDDEN,
      height: props.isOpen ? null : 0
    };
    this.element = null;
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // the height transition will work after class "collapsing" applied
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout(() => {
          this.setState({
            collapse: SHOWN,
            height: null
          });
        }, 350);
      });
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ height: this.getHeight() }, () => {
        this.setState({
          collapse: HIDE,
          height: this.getHeight()
        }, () => {
          this.setState({ height: 0 });
        });
      });

      this.transitionTag = setTimeout(() => {
        this.setState({
          collapse: HIDDEN,
          height: null
        });
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
      navbar,
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen']);
    const { collapse, height } = this.state;
    let collapseClass;
    switch (collapse) {
      case SHOW:
        collapseClass = 'collapsing';
        break;
      case SHOWN:
        collapseClass = 'collapse show';
        break;
      case HIDE:
        collapseClass = 'collapsing';
        break;
      case HIDDEN:
        collapseClass = 'collapse';
        break;
      default:
      // HIDDEN
        collapseClass = 'collapse';
    }

    const classes = mapToCssModules(classNames(
      className,
      collapseClass,
      { navbar }
    ), cssModule);
    const style = height === null ? null : { height };
    return (
      <Tag
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={(c) => { this.element = c; }}
      />
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
