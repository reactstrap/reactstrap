import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition, { EXITED, ENTERING, ENTERED, EXITING } from 'react-transition-group/Transition';
import { mapToCssModules, omit, TransitionTimeouts } from './utils';

const propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
};

const defaultProps = {
  ...Transition.defaultProps,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse,
};

function getTransitionClass(status) {
  if (status === ENTERING) {
    return 'collapsing';
  } else if (status === ENTERED) {
    return 'collapse show';
  } else if (status === EXITING) {
    return 'collapsing';
  } else if (status === EXITED) {
    return 'collapse';
  }
  return 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach((name) => {
      this[name] = this[name].bind(this);
    });
  }

  onEntering(node, isAppearing) {
    this.setState({ height: getHeight(node) });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(node, isAppearing) {
    this.setState({ height: null });
    this.props.onEntered(node, isAppearing);
  }

  onExit(node) {
    this.setState({ height: getHeight(node) });
    this.props.onExit(node);
  }

  onExiting(node) {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
    this.setState({ height: 0 });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({ height: null });
    this.props.onExited(node);
  }

  render() {
    const {
      tag: Tag,
      isOpen,
      className,
      navbar,
      cssModule,
      children,
      ...transitionProps
    } = this.props;
    const otherProps = omit(transitionProps, Object.keys(propTypes));
    const { height } = this.state;

    return (
      <Transition
        {...transitionProps}
        in={isOpen}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          let collapseClass = getTransitionClass(status);
          const classes = mapToCssModules(classNames(
            className,
            collapseClass,
            navbar && 'navbar-collapse'
          ), cssModule);
          const style = height === null ? null : { height };
          return (
            <Tag
              {...otherProps}
              style={{ ...otherProps.style, ...style }}
              className={classes}
            >
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
