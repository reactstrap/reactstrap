import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import { mapToCssModules, omit, pick, TransitionTimeouts, TransitionPropTypeKeys, TransitionStatuses } from './utils';

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
  innerRef: PropTypes.object,
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

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'collapsing',
  [TransitionStatuses.ENTERED]: 'collapse show',
  [TransitionStatuses.EXITING]: 'collapsing',
  [TransitionStatuses.EXITED]: 'collapse',
};

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
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
      innerRef,
      ...otherProps
    } = this.props;

    const { height } = this.state;

    // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
    // empty object "{}". This is the result of the `react-transition-group` babel
    // configuration settings. Therefore, to ensure that production builds work without
    // error, we can either explicitly define keys or use the Transition.defaultProps.
    // Using the Transition.defaultProps excludes any required props. Thus, the best
    // solution is to explicitly define required props in our utilities and reference these.
    // This also gives us more flexibility in the future to remove the prop-types
    // dependency in distribution builds (Similar to how `react-transition-group` does).
    // Note: Without omitting the `react-transition-group` props, the resulting child
    // Tag component would inherit the Transition properties as attributes for the HTML
    // element which results in errors/warnings for non-valid attributes.
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
            collapseClass,
            navbar && 'navbar-collapse'
          ), cssModule);
          const style = height === null ? null : { height };
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
