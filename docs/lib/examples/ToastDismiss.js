/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

class ToastDismissExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <br />
        <br />
        <Toast isOpen={this.state.show}>
          <ToastHeader toggle={this.toggle}>Toast title</ToastHeader>
          <ToastBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default ToastDismissExample;
