import React from 'react';
import ButtonsExample from './ButtonsExample';
import DropdownsExample from './DropdownsExample';
import ModalExample from './ModalExample';
import TetherExample from './TetherExample';
import TooltipExample from './TooltipExample';
import LabelsExample from './LabelsExample';
import PopoverExample from './PopoverExample';

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="jumbotron m-b-3 m-t-1 text-xs-center">
              <h1>React Bootstrap Components</h1>
            </div>
            <ButtonsExample/>
            <DropdownsExample/>
            <TetherExample/>
            <TooltipExample/>
            <ModalExample/>
            <PopoverExample/>
            <LabelsExample/>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
