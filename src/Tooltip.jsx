import React, { PropTypes } from 'react';
import TetherContent from './TetherContent';
import { getTetherAttachments, tetherAttachements } from './utils';
const propTypes = {
  placement: React.PropTypes.oneOf(tetherAttachements),
  target: PropTypes.string.isRequired,
  isOpen: PropTypes.bool
};

const defaultProps = {
  isOpen: false,
  placement: 'bottom'
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'tooltip in', enabled: 'open' },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.getTetherConfig = this.getTetherConfig.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
    this.onTimeout = this.onTimeout.bind(this);
  }

  componentDidMount() {
    this._target = document.getElementById(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this._hoverTimeout) {
      clearTimeout(this._hoverTimeout);
    }

    if (!this.props.isOpen) {
      this.toggle();
    }
  }

  onMouseLeaveTooltip() {
    this._hoverTimeout = setTimeout(this.onTimeout, 250);
  }

  onTimeout() {
    if (this.props.isOpen) {
      this.toggle();
    }
  }

  getTetherConfig() {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: '#' + this.props.target,
      ...this.props.tether
    };
  }

  handleDocumentClick(e) {
    if (e.target === this._target || this._target.contains(e.target)) {
      if (this._hoverTimeout) {
        clearTimeout(this._hoverTimeout);
      }

      if (!this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    this._target.addEventListener('mouseover', this.onMouseOverTooltip);
    this._target.addEventListener('mouseout', this.onMouseLeaveTooltip);
    document.addEventListener('click', this.handleDocumentClick);
  }

  removeTargetEvents() {
    this._target.removeEventListener('mouseover', this.onMouseOverTooltip);
    this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip);
    document.removeEventListener('click', this.handleDocumentClick);
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    this.props.toggle();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    let tetherConfig = this.getTetherConfig();

    return (
      <TetherContent
        onMouseOver={this.onMouseOverTooltip}
        onMouseLeave={this.onMouseLeaveTooltip}
        arrow="tooltip"
        tether={tetherConfig}
        isOpen={this.props.isOpen}
        toggle={this.toggle}>
        <div className="tooltip-inner">
          {this.props.children}
        </div>
      </TetherContent>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
