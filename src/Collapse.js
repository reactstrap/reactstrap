import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
  mapToCssModules, omit, pick, TransitionTimeouts, TransitionPropTypeKeys, TransitionStatuses, tagPropType
} from './utils';

const propTypes = {
  ...Transition.propTypes,
  horizontal: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: tagPropType,
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),
};

const defaultProps = {
  ...Transition.defaultProps,
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse,
};

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'collapsing',
  [TransitionStatuses.ENTERED]: 'collapse show',
  [TransitionStatuses.EXITING]: 'collapsing',
  [TransitionStatuses.EXITED]: 'collapse',
};

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach((name) => {
      this[name] = this[name].bind(this);
    });
  }

  onEntering(node, isAppearing) {
    this.setState({ dimension: this.getDimension(node) });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(node, isAppearing) {
    this.setState({ dimension: null });
    this.props.onEntered(node, isAppearing);
  }

  onExit(node) {
    this.setState({ dimension: this.getDimension(node) });
    this.props.onExit(node);
  }

  onExiting(node) {
    // getting this variable triggers a reflow
    const _unused = this.getDimension(node); // eslint-disable-line no-unused-vars
    this.setState({ dimension: 0 });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({ dimension: null });
    this.props.onExited(node);
  }

  getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  }

  render() {
    const {
      tag: Tag,
      horizontal,
      isOpen,
      className,
      navbar,
      cssModule,
      children,
      innerRef,
      ...otherProps
    } = this.props;

    const { dimension } = this.state;

    const transitionProps = pick(otherProps, TransitionPropTypeKeys);
    const childProps = omit(otherProps, TransitionPropTypeKeys);
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
            horizontal && 'collapse-horizontal',
            collapseClass,
            navbar && 'navbar-collapse'
          ), cssModule);
          const style = dimension === null ? null : { [horizontal ? 'width' : 'height']: dimension };
          return (
            <Tag
              {...childProps}
              style={{ ...childProps.style, ...style }}
              className={classes}
              ref={this.props.innerRef}
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
