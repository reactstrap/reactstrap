import React, { Component } from 'react';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
  }

  onOpened() {
    this.setState({ ...this.state, status: 'Opened' });
  }

  onClosed() {
    this.setState({ ...this.state, status: 'Closed' });
  }

  toggle() {
    const status = !this.state.collapse ? 'Opening...' : 'Closing...';
    this.setState({ collapse: !this.state.collapse, status });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <h5>Current state: {this.state.status}</h5>
        <Collapse isOpen={this.state.collapse} onOpened={this.onOpened} onClosed={this.onClosed}>
          <Card>
            <CardBlock>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
