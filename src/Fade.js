import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import omit from 'lodash.omit';

const propTypes = {
  baseClass: PropTypes.string,
  baseClassIn: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  cssModule: PropTypes.object,
  transitionAppearTimeout: PropTypes.number,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number,
  transitionAppear: PropTypes.bool,
  transitionEnter: PropTypes.bool,
  transitionLeave: PropTypes.bool,
  onLeave: PropTypes.func,
  onEnter: PropTypes.func,
};

const defaultProps = {
  tag: 'div',
  baseClass: 'fade',
  baseClassIn: 'in',
  transitionAppearTimeout: 0,
  transitionEnterTimeout: 0,
  transitionLeaveTimeout: 0,
  transitionAppear: true,
  transitionEnter: true,
  transitionLeave: true
};

class Fade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: !props.transitionAppear,
    };

    this.onLeave = this.onLeave.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(cb) {
    return () => {
      cb();
      if (this.props.onEnter) {
        this.props.onEnter();
      }
    };
  }

  onLeave(cb) {
    return () => {
      cb();
      if (this.props.onLeave) {
        this.props.onLeave();
      }
    };
  }

  componentWillAppear(cb) {
    if (!this.props.transitionAppear) {
      this.onEnter(cb)();
    }

    setTimeout(this.onEnter(cb), this.props.transitionAppearTimeout);
  }

  componentDidAppear() {
    this.setState({
      mounted: true
    });
  }

  componentWillEnter(cb) {
    if (!this.props.transitionEnter) {
      this.onEnter(cb)();
    }

    setTimeout(this.onEnter(cb), this.props.transitionEnterTimeout);
  }

  componentDidEnter() {
    this.setState({
      mounted: true
    });
  }

  componentWillLeave(cb) {
    this.setState({
      mounted: false
    });

    if (!this.props.transitionLeave) {
      this.onLeave(cb)();
    }

    setTimeout(this.onLeave(cb), this.props.transitionLeaveTimeout);
  }

  render() {
    const {
      baseClass,
      baseClassIn,
      className,
      cssModule,
      tag: Tag
    } = this.props;
    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = mapToCssModules(classNames(
      className,
      baseClass,
      this.state.mounted ? baseClassIn : false
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
