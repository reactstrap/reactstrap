import React from 'react';
import PropTypes from 'prop-types';
import PopperContent from './PopperContent';
import {
  getTarget,
  targetPropType,
  omit,
  PopperPlacements,
  mapToCssModules
} from './utils';

export const propTypes = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),
  trigger: PropTypes.string
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};

const defaultProps = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function () {},
  trigger: 'click',
};

class TooltipPopoverWrapper extends React.Component {
  constructor(props) {
    super(props);

    this._target = null;
    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.showWithDelay = this.showWithDelay.bind(this);
    this.hideWithDelay = this.hideWithDelay.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(
      this
    );
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.getRef = this.getRef.bind(this);
  }

  componentDidMount() {
    this.updateTarget();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }

  onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      e.persist();
      this._hideTimeout = setTimeout(
        this.hide.bind(this, e),
        this.getDelay('hide')
      );
    }
  }

  onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  }

  getRef(ref) {
    const { innerRef } = this.props;
    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }
    this._popover = ref;
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle(e);
    }
  }

  showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(
      this.show.bind(this, e),
      this.getDelay('show')
    );
  }
  hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle(e);
    }
  }

  hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(
      this.hide.bind(this, e),
      this.getDelay('hide')
    );
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
    if (this._target && this.props.trigger.indexOf('click') > -1) {
      if (e.target === this._target || this._target.contains(e.target)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.showWithDelay(e);
        } else {
          this.hideWithDelay(e);
        }
      }
    }
  }

  addTargetEvents() {
    if (this.props.trigger) {
      let triggers = this.props.trigger.split(' ');
      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1) {
          ['click', 'touchstart'].forEach(event =>
            document.addEventListener(event, this.handleDocumentClick, true)
          );
        }

        if (this._target) {
          if (triggers.indexOf('hover') > -1) {
            this._target.addEventListener(
              'mouseover',
              this.showWithDelay,
              true
            );
            this._target.addEventListener(
              'mouseout',
              this.hideWithDelay,
              true
            );
          }
          if (triggers.indexOf('focus') > -1) {
            this._target.addEventListener('focusin', this.show, true);
            this._target.addEventListener('focusout', this.hide, true);
          }
          this._target.addEventListener('keydown', this.onEscKeyDown, true);
        }
      }
    }
  }

  removeTargetEvents() {
    if (this._target) {
      this._target.removeEventListener(
        'mouseover',
        this.showWithDelay,
        true
      );
      this._target.removeEventListener(
        'mouseout',
        this.hideWithDelay,
        true
      );
      this._target.addEventListener('keydown', this.onEscKeyDown, true);
      this._target.addEventListener('focusin', this.show, true);
      this._target.addEventListener('focusout', this.hide, true);
    }

    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  updateTarget() {
    const newTarget = getTarget(this.props.target);
    if (newTarget !== this._target) {
      this.removeTargetEvents();
      this._target = newTarget;
      this.addTargetEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    this.updateTarget();

    const {
      className,
      cssModule,
      innerClassName,
      target,
      isOpen,
      hideArrow,
      boundariesElement,
      placement,
      placementPrefix,
      arrowClassName,
      container,
      modifiers,
      offset,
    } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const popperClasses = mapToCssModules(className, cssModule);

    const classes = mapToCssModules(innerClassName, cssModule);

    return (
      <PopperContent
        className={popperClasses}
        target={target}
        isOpen={isOpen}
        hideArrow={hideArrow}
        boundariesElement={boundariesElement}
        placement={placement}
        placementPrefix={placementPrefix}
        arrowClassName={arrowClassName}
        container={container}
        modifiers={modifiers}
        offset={offset}
        cssModule={cssModule}
      >
        <div
          {...attributes}
          ref={this.getRef}
          className={classes}
          role="tooltip"
          aria-hidden={isOpen}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
          onKeyDown={this.onEscKeyDown}
        />
      </PopperContent>
    );
  }
}

TooltipPopoverWrapper.propTypes = propTypes;
TooltipPopoverWrapper.defaultProps = defaultProps;

export default TooltipPopoverWrapper;
