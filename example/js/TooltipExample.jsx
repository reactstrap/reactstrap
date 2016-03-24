/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Tooltip } from 'reactstrap';

class TooltipExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip1: false,
      tooltip2: false,
      tooltip3: false,
      tooltip4: false
    };
  }

  render() {
    return (
      <div>
        <h3>Tooltips</h3>
        <hr/>
        <p>
          <Button color="secondary" id="tooltip-top">Top</Button>&nbsp;
          <Button color="secondary" id="tooltip-bottom">Bottom</Button>&nbsp;
          <Button color="secondary" id="tooltip-left">Left</Button>&nbsp;
          <Button color="secondary" id="tooltip-right">Right</Button>&nbsp;
        </p>
        <Tooltip placement="top" isOpen={this.state.tooltip1} target="tooltip-top" toggle={() => { this.setState({ tooltip1: !this.state.tooltip1 })}}>
          Tooltip Content
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltip2} target="tooltip-bottom" toggle={() => { this.setState({ tooltip2: !this.state.tooltip2 })}}>
          Tooltip Content
        </Tooltip>
        <Tooltip placement="right" isOpen={this.state.tooltip3} target="tooltip-right" toggle={() => { this.setState({ tooltip3: !this.state.tooltip3})}}>
          Tooltip Content
        </Tooltip>
        <Tooltip placement="left" isOpen={this.state.tooltip4} target="tooltip-left" toggle={() => { this.setState({ tooltip4: !this.state.tooltip4})}}>
          Tooltip Content
        </Tooltip>
        <hr/>
      </div>
    );
  }
}

export default TooltipExample;
