import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
  mapToCssModules,
  omit,
  pick,
  TransitionTimeouts,
  TransitionPropTypeKeys,
  TransitionStatuses,
  tagPropType,
} from './utils';

const propTypes = {
  ...Transition.propTypes,
  /** Make content animation appear horizontally */
  horizontal: PropTypes.bool,
  /** Set if Collapse is open or closed */
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Add custom class */
  className: PropTypes.node,
  navbar: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.shape({ current: PropTypes.object }),
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
      dimension: null,
    };

    this.nodeRef = props.innerRef || React.createRef();

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(
      (name) => {
        this[name] = this[name].bind(this);
      },
    );
  }

  onEntering(_, isAppearing) {
    const node = this.getNode();
    this.setState({ dimension: this.getDimension(node) });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(_, isAppearing) {
    const node = this.getNode();
    this.setState({ dimension: null });
    this.props.onEntered(node, isAppearing);
  }

  onExit() {
    const node = this.getNode();
    this.setState({ dimension: this.getDimension(node) });
    this.props.onExit(node);
  }

  onExiting() {
    const node = this.getNode();
    // getting this variable triggers a reflow
    const _unused = this.getDimension(node); // eslint-disable-line no-unused-vars
    this.setState({ dimension: 0 });
    this.props.onExiting(node);
  }

  onExited() {
    const node = this.getNode();
    this.setState({ dimension: null });
    this.props.onExited(node);
  }

  getNode() {
    return this.nodeRef.current;
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
        nodeRef={this.nodeRef}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          let collapseClass = getTransitionClass(status);
          const classes = mapToCssModules(
            classNames(
              className,
              horizontal && 'collapse-horizontal',
              collapseClass,
              navbar && 'navbar-collapse',
            ),
            cssModule,
          );
          const style =
            dimension === null
              ? null
              : { [horizontal ? 'width' : 'height']: dimension };
          return (
            <Tag
              {...childProps}
              style={{ ...childProps.style, ...style }}
              className={classes}
              ref={this.nodeRef}
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
export default React.forwardRef((props, ref) => <Collapse innerRef={ref} {...props} />);
