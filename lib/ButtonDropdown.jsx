import React, { PropTypes } from 'react';
import Dropdown from './Dropdown';

const propTypes = {
  children: PropTypes.node
};

class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      ...attributes
    } = this.props;

    return (
      <Dropdown {...attributes} group>
        {children}
      </Dropdown>
    );
  }
}

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
