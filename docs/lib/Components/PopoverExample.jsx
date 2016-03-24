/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Popover, PopoverTitle, PopoverContent } from 'lib/index';

class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Button className="m-r-1" color="secondary" id={'Popover-' + this.props.item.id} onClick={this.toggle}>
        {this.props.item.text}
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.item.id} toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </Button>
    );
  }
}

class PopoverExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          id: 0,
          placement: 'top',
          text: 'Top'
        },
        {
          id: 1,
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          id: 3,
          placement: 'left',
          text: 'Left'
        },
        {
          id: 2,
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3>Popovers</h3>
        <hr/>
        <p>
          { this.state.popovers.map((popover) => {
            return (
              <PopoverItem key={popover.id} item={popover} />
            );
          })}
        </p>
        <hr/>
      </div>
    );
  }
}

export default PopoverExample;
