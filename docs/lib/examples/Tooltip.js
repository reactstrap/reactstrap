/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Tooltip } from 'reactstrap';
import { mapToCssModules } from '../../../src/utils'
import classNames from 'classnames'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }



  render() {
    const classes = 'tooltip-inner'
    return (
      <div>
        <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}
