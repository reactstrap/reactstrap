import 'bootstrap-css';

const {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TetherContent,
  Tooltip
} = Reactstrap;

class HelloWorldComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dd1: false,
      tetherConfig: {
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
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }

  render() {
    return (
      <div>
        <h3>Buttons</h3>
        <p>
          <Button color="primary">primary</Button>&nbsp;
          <Button color="secondary">secondary</Button>&nbsp;
          <Button color="success">success</Button>&nbsp;
          <Button color="info">info</Button>&nbsp;
          <Button color="warning">warning</Button>&nbsp;
          <Button color="danger">danger</Button>
          <Button color="link">link</Button>
        </p>
        <p>
          <Button color="primary-outline">primary-outline</Button>&nbsp;
          <Button color="secondary-outline">secondary-outline</Button>&nbsp;
          <Button color="success-outline">success-outline</Button>&nbsp;
          <Button color="info-outline">info-outline</Button>&nbsp;
          <Button color="warning-outline">warning-outline</Button>&nbsp;
          <Button color="danger-outline">danger-outline</Button>
        </p>
        <hr/>
        <h3>Tether Content</h3>
        <p>
          <Button color="primary" id="tether" onClick={() => {this.setState({ tc: !this.state.tc })}}>Tether Target</Button>
          <TetherContent tether={this.state.tetherConfig} isOpen={this.state.tc} toggle={() => {this.setState({ tc: !this.state.tc })}}>
            <div>
              <div className="popover-arrow"></div>
              <h3 className="popover-title">Tether Content</h3>
              <div className="popover-content">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                <Button color="danger" onClick={() => {this.setState({ tc: !this.state.tc })}}>Confirm</Button>
              </div>
            </div>
          </TetherContent>
        </p>
        <hr/>
        <h3>Dropdown</h3>
        <Dropdown className="m-b-1" isOpen={this.state.dd1} toggle={this.dropdownToggle}>
          <DropdownToggle>
            <Button color="danger">Default</Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <p>Toggle these tether examples and resize the window height to see the dropdown switch orientation</p>
        <Dropdown tether className="m-y-1" isOpen={this.state.dd4} toggle={() => { this.setState({ dd4: !this.state.dd4 })}}>
          <DropdownToggle caret>
            <Button color="primary">Tether</Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown tether={{ target: '#caret' }} className="m-b-1 btn-group" isOpen={this.state.dd3} toggle={() => { this.setState({ dd3: !this.state.dd3 });}}>
          <Button id="caret" color="danger">Caret Is Toggle</Button>
          <DropdownToggle caret>
            <Button color="danger"><span className="sr-only">Toggle Dropdown</span></Button>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <hr/>
        <h3>Tooltips</h3>
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
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorldComponent name="Joe Schmoe"/>,
  document.getElementById('app')
);
