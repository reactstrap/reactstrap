import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import classNames from 'classnames';
import { mapToCssModules } from './utils';

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      focus: false,
    }

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onBlur() {
    this.setState({
      focus: false,
    });
  }

  onFocus() {
    this.setState({
      focus: true,
    });
  }

  onClick() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className, 
      { focus: this.state.focus, active: this.state.toggle }
      ), cssModule);

    return <Button
      onBlur={this.onBlur} 
      onFocus={this.onFocus} 
      onClick={this.onClick}
      className={classes}
      {...attributes}
    />;
  }
}

export default ButtonToggle;