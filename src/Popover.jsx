import React, { PropTypes } from 'react';
import TetherContent from './TetherContent';
import { getTetherAttachments, tetherAttachements } from './utils';

const propTypes = {
  placement: React.PropTypes.oneOf(tetherAttachements),
  target: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  tether: PropTypes.object,
  children: PropTypes.node,
  toggle: PropTypes.func
};

const defaultProps = {
  isOpen: false,
  placement: 'bottom',
  toggle: () => {}
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'popover', enabled: 'open' },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.getTetherConfig = this.getTetherConfig.bind(this);
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

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    let tetherConfig = this.getTetherConfig();

    return (
      <TetherContent
        arrow="popover"
        tether={tetherConfig}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <div className="popover-inner">
          {this.props.children}
        </div>
      </TetherContent>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
