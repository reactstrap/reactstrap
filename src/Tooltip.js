import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopperJS from 'popper.js';
import PopperContent from './PopperContent';
import { getTarget, DOMElement, mapToCssModules, omit } from './utils';

const propTypes = {
  placement: PropTypes.oneOf(PopperJS.placements),
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]).isRequired,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]),
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};

const defaultProps = {
  isOpen: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function () {}
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
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
    this._target = getTarget(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(this.show, this.getDelay('show'));
  }

  onMouseLeaveTooltip() {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
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
    this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  show() {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
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
    ['click', 'touchstart'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeTargetEvents() {
    this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
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
      this.props.innerClassName
    ), this.props.cssModule);

    const popperClasses = mapToCssModules(classNames(
      'tooltip',
      'show',
      this.props.className
    ), this.props.cssModule);

    return (
      <PopperContent
        className={popperClasses}
        target={this.props.target}
        isOpen={this.props.isOpen}
        placement={this.props.placement}
        placementPrefix={this.props.placementPrefix}
        container={this.props.container}
      >
        <div
          {...attributes}
          className={classes}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
        />
      </PopperContent>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
