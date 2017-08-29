import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TetherContent from './TetherContent';
import { getTetherAttachments, mapToCssModules, omit, tetherAttachements } from './utils';

const propTypes = {
  placement: PropTypes.oneOf(tetherAttachements),
  animation: PropTypes.bool,
  animationDuration: PropTypes.number,
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  tether: PropTypes.object,
  tetherClassName: PropTypes.string,
  tetherRef: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

const defaultProps = {
  isOpen: false,
  animation: true,
  animationDuration: 150,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function () {}
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show',
  },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.getTarget = this.getTarget.bind(this);
    this.getTetherConfig = this.getTetherConfig.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = this.getTarget();
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._show();
  }

  onMouseLeaveTooltip() {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hide();
  }

  onMouseOverTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
  }

  onMouseLeaveTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hide();
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  getTarget() {
    const { target } = this.props;
    if (typeof target === 'object') {
      return target;
    }
    return document.getElementById(target);
  }

  getTetherConfig() {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: this.getTarget,
      ...this.props.tether
    };
  }

  _show() {
    this._showTimeout = setTimeout(this.show, this.getDelay('show'));
    if (this.props.animation) {
      this.setState({ show: true });
    }
  }

  show() {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
  }

  _hide() {
    this._hideTimeout = setTimeout(() => {
      if (this.props.animation) {
        this.setState({ show: false }, () => {
          this._hideTimeout = setTimeout(this.hide, this.props.animationDuration);
        });
      } else {
        this.hide();
      }
    }, this.getDelay('hide'));
  }

  hide() {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle();
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    if (e.target === this._target || this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeTargetEvents() {
    this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));
    const classes = mapToCssModules(classNames(
      'tooltip-inner',
      this.props.className
    ), this.props.cssModule);

    let tetherConfig = this.getTetherConfig();

    const tetherClasses = mapToCssModules(classNames(
      'tooltip',
      this.props.animation ? 'fade' : false,
      this.props.animation && this.state.show ? 'show' : false,
      this.props.tetherClassName
    ), this.props.cssModule);
    return (
      <TetherContent
        className={tetherClasses}
        tether={tetherConfig}
        tetherRef={this.props.tetherRef}
        isOpen={this.props.isOpen}
        toggle={this.toggle}
      >
        <div
          {...attributes}
          className={classes}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
        />
      </TetherContent>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
