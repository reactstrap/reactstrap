/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, TetherContent } from 'lib/index';


class TetherExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tether: {
        target: '#tether',
        attachment: 'middle left',
        targetAttachment: 'middle right',
        classPrefix: 'bs-tether',
        classes: { element: 'popover', enabled: 'open' },
        constraints: [
          { to: 'scrollParent', attachment: 'together none' },
          { to: 'window', attachment: 'together none' }
        ]
      }
    };

    this.toggleTether = this.toggleTether.bind(this);
  }

  toggleTether() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <h3>Tether Content</h3>
        <hr/>
        <p>
          <Button color="primary" id="tether" onClick={this.toggleTether}>Tether Target</Button>&nbsp;
          <TetherContent tether={this.state.tether} isOpen={this.state.open} toggle={this.toggleTether}>
            <div>
              <div className="popover-arrow"></div>
              <h3 className="popover-title">Tether Content</h3>
              <div className="popover-content">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                <Button color="danger" onClick={this.toggleTether}>Confirm</Button>
              </div>
            </div>
          </TetherContent>
        </p>
      </div>
    );
  }
}

export default TetherExample;
